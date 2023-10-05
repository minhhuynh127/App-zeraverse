import { useAuthContext } from "@/src/app/context/AuthProvider";
import { SOCKET_EVENT, STATUS } from "@/src/app/utils/constant";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import { getTimeRemaining, isLogged } from "../utils/helper";
const DEFAULT_TIME = {
  days: "00",
  hours: "01",
  isTimeOut: false,
  minutes: "00",
  seconds: "00",
  time: 3600000,
};
export type TIME_COUNTER_TYPE = {
  days: string | number;
  hours: string | number;
  isTimeOut: boolean;
  minutes: string | number;
  seconds: string | number;
  time: number;
};
const SocketContext = createContext(null as any);

export const useSocketContext = () => {
  const socketContext = useContext(SocketContext);
  if (!socketContext) {
    throw new Error(
      "useSocketContext() can only be used inside of <SocketContextProvider />, " +
        "please declare it at a higher level."
    );
  }
  return useMemo(() => ({ ...socketContext }), [socketContext]);
};

export const SocketContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [socketCLI, setSocketCLI] = useState<any>();
  const [playedTime, setPlayedTime] = useState<number>(0);
  const [remainingTime, setRemainingTime] =
    useState<TIME_COUNTER_TYPE>(DEFAULT_TIME);
  const [connectStatus, setConnectStatus] = useState<string>(STATUS.INIT);
  const [connect, setConnect] = useState<boolean>(false);
  const [isCountdown, setIsCountdown] = useState<boolean>(false);
  const [sendMessageStatus, setSendMessageStatus] = useState<string>(
    STATUS.NOT_START
  );
  const [newMessage, setNewMessage] = useState<any>();
  const [systemMessage, setSystemMessage] = useState<any>();
  const [isJoinedRoom, setIsJoinedRoom] = useState<boolean>(false);
  const { userInfo, setUserInfo, verifyStatus } = useAuthContext();

  const clearState = () => {
    setIsCountdown(false);
    setPlayedTime(0);
    setIsJoinedRoom(false);
    setConnectStatus(STATUS.INIT);
  };
  // Connect
  useEffect(() => {
    if (connect) {
      const socket = io("https://chat-server.stg.zeraverse.io/");
      setSocketCLI(socket);
      setConnectStatus(STATUS.IN_PROGRESS);
    }

    if (!connect && socketCLI) {
      socketCLI.disconnect();
      clearState();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connect]);

  // set remaining time
  useEffect(() => {
    const remainingTime =
      verifyStatus === STATUS.SUCCESS ? userInfo?.playtime : 0;
    const remainingTimeFormat = getTimeRemaining(remainingTime as number);
    setRemainingTime(remainingTimeFormat);
  }, [verifyStatus, userInfo?.playtime]);

  // on event of user logged
  useEffect(() => {
    if (!socketCLI || verifyStatus !== STATUS.SUCCESS) return;

    socketCLI.on(SOCKET_EVENT.LISTEN_MESSAGE, (data: any) => {
      if (!data) return;
      console.log("data", data);

      if (data.is_message) {
        setSendMessageStatus(STATUS.SUCCESS);
        setNewMessage(data);
        console.log("newMessage", newMessage);
      } else {
        setSystemMessage(data);
        console.log("systemMessage12321", systemMessage);
        // bonus zera for current user
        if (data?.user?.id === userInfo?.id && data?.zera) {
          setUserInfo((prev: any) => ({
            ...prev,
            zera: (+prev?.zera || 0) + (+data?.zera || 0),
          }));
        }
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socketCLI, verifyStatus]);

  // on server event
  useEffect(() => {
    if (!socketCLI) return;

    socketCLI.on(SOCKET_EVENT.PLAY_TIME, (data: any) => {
      const { remaining_time } = data ?? {};
      setPlayedTime((prev) => prev + 1);
      if (isLogged()) {
        setUserInfo((prev: any) => ({
          ...prev,
          playtime: remaining_time || 0,
        }));
      }
    });

    socketCLI.on(SOCKET_EVENT.CONNECT_SUCCESS, () => {
      setConnectStatus(STATUS.SUCCESS);
      //   console.log("success");
    });

    // on event server connect error
    socketCLI.on(SOCKET_EVENT.SERVER_CONNECT_ERROR, (e: any) => {
      console.error(`socket connect error due to ${e.message}`);
      setConnectStatus(STATUS.FAIL);
      setIsCountdown(false);
    });

    // on event server disconnect
    socketCLI.on(SOCKET_EVENT.SERVER_DISCONNECT, () => {
      //   console.error(`server disconnect`);
      setConnectStatus(STATUS.FAIL);
      setIsCountdown(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socketCLI]);

  const socketProvider = useMemo(
    () => ({
      connect,
      setConnect,
      socketCLI,
      sendMessageStatus,
      setSendMessageStatus,
      systemMessage,
      newMessage,
      connectStatus,
      setIsJoinedRoom,
      setIsCountdown,
      remainingTime,
      playedTime,
    }),
    [
      connect,
      setConnect,
      socketCLI,
      sendMessageStatus,
      setSendMessageStatus,
      systemMessage,
      newMessage,
      connectStatus,
      setIsJoinedRoom,
      setIsCountdown,
      remainingTime,
      playedTime,
    ]
  );
  return (
    <SocketContext.Provider value={socketProvider}>
      {children}
    </SocketContext.Provider>
  );
};
