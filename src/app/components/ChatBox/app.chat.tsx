import imgage1 from "@/public/images/game-screen/image-14.png";
import zeraCoin from "@/public/images/hall-of-fame/zera-coin.png";
import EmojiPicker, { EmojiClickData, EmojiStyle } from "emoji-picker-react";
import Image from "next/image";
import { Fragment, memo, useEffect, useMemo, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { useSocketContext } from "@/src/app/context/socket-context";
import { MESSAGE_TYPE, SOCKET_EVENT, STATUS } from "@/src/app/utils/constant";
import { useAuthContext } from "../../context/AuthProvider";
import DEFAULT_AVATAR from "@/public/images/user-images/user-image-1.png.png";
import { getMessage } from "../../services/chat-service";
import Link from "next/link";

const ChatBox = ({ game }: { game: any }) => {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [currentPicker, setCurrentPicker] = useState<any>(null);
  const [valueInput, setValueInput] = useState<string>("");
  const [selectedEmoji, setSelectedEmoji] = useState<string>("1f60a");
  const [listUser, setListUser] = useState<any>();
  const { userInfo, token, verifyStatus } = useAuthContext();
  const [messages, setMessages] = useState<Array<any>>([]);
  const [userMessage, setUserMessage] = useState<Array<any>>([]);
  const [messageSystem, seMessageSystem] = useState<Array<any>>([]);
  const [myMessage, setMymessage] = useState<Array<any>>([]);
  const [messageSentCount, setSentMessageCount] = useState(0);
  const boxChatRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const {
    socketCLI,
    sendMessageStatus,
    setSendMessageStatus,
    systemMessage,
    newMessage,
    connectStatus,
    setIsJoinedRoom,
  } = useSocketContext();
  /* handle choose emoji */
  function onClick(emojiData: EmojiClickData, event: MouseEvent) {
    setValueInput(
      (valueInput) =>
        valueInput + (emojiData.isCustom ? emojiData.unified : emojiData.emoji)
    );
    setSelectedEmoji(emojiData.unified);
  }

  useEffect(() => {
    if (
      connectStatus !== STATUS.SUCCESS ||
      verifyStatus !== STATUS.SUCCESS ||
      !game
    )
      return;
    socketCLI.emit(SOCKET_EVENT.USER_JOIN_ROOM, { room_id: game?.id, token });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectStatus, verifyStatus, game]);

  // get messages
  useEffect(() => {
    if (verifyStatus !== STATUS.SUCCESS || !game) return;
    getMessage(game?.id, token).then((data: any) => {
      setMessages(data.reverse());
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verifyStatus, game]);

  // get users online
  useEffect(() => {
    if (!socketCLI) return;
    socketCLI.on(SOCKET_EVENT.LIST_USERS_JOIN_ROOM, (data: any) => {
      if (data) {
        setListUser(data);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socketCLI]);

  //Click Send Message
  const hanldeSendMessage = () => {
    socketCLI?.emit(SOCKET_EVENT.USER_SEND_MESSAGE, {
      msg: valueInput,
    });
    // setSendMessageStatus(HANDLE_STATUS.IN_PROGRESS);
    setValueInput("");
  };

  //  send msg
  useEffect(() => {
    if (sendMessageStatus === STATUS.SUCCESS && newMessage) {
      setValueInput("");

      setMessages((prev) => [...prev, newMessage]);

      if (
        newMessage?.is_message &&
        Number(userInfo?.id) === newMessage.user_id
      ) {
        setSentMessageCount((prev) => prev + 1);
      }

      setValueInput("");

      // scroll to bottom
      if (boxChatRef.current) {
        boxChatRef.current.scrollTo({
          top: messagesRef?.current?.offsetHeight,
          behavior: "smooth",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendMessageStatus, newMessage]);

  // scroll when messages change
  useEffect(() => {
    if (messages) {
      boxChatRef.current?.scrollTo({
        top: messagesRef.current?.offsetHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  // add new message
  useEffect(() => {
    if (systemMessage) setMessages((prev) => [...prev, systemMessage]);
  }, [systemMessage]);

  return (
    <div>
      <div className="h-10 rounded-[10px] bg-[#52495D] py-2 px-[10px] flex justify-between items-center">
        <div className="flex w-[50%] overflow-hidden truncate">
          {listUser?.users?.length > 0 &&
            listUser?.users?.slice(0, 5).map((user: any, index: number) => {
              return (
                <div key={index} className="h-[24px] w-[24px] avatar-chat">
                  <Image
                    priority={true}
                    src={user?.avatar ?? DEFAULT_AVATAR}
                    width={500}
                    height={500}
                    alt=""
                    className="object-cover w-full h-full rounded-[50%]"
                  />
                </div>
              );
            })}
        </div>

        {listUser?.users?.count > 5 && (
          <p className="font-inter font-normal text-xs leading-[14.52px] text-white">
            + {listUser?.users?.count - 5} More
          </p>
        )}
      </div>

      <div
        className="p-4 flex flex-col gap-2 h-[234px] overflow-y-auto item-shop-scrollbar overflow-x-hidden"
        ref={boxChatRef}
      >
        <div ref={messagesRef} className="px-1">
          {messages?.map((msg, i) => (
            <MessageItem key={i} msg={msg} prevMsg={i > 0 && messages[i - 1]} />
          ))}
        </div>
      </div>

      <div className="h-10 rounded-[10px] bg-[#52495D] flex justify-start items-center relative">
        <input
          type="text"
          className="w-[320px] h-[37px] rounded-[10px] py-[10px] px-[20px] placeholder-white/50 text-[#FFFFFF]/50"
          placeholder="Say something ... "
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
        />
        <div className="flex gap-2">
          <div onClick={() => setShowPicker(!showPicker)}>
            <FaRegFaceSmileBeam color="#ccc" size={25} />
          </div>

          {showPicker && (
            <div className="emoji-box absolute left-[-34px] top-[40px] z-50">
              <EmojiPicker
                onEmojiClick={onClick}
                autoFocusSearch={false}
                emojiStyle={EmojiStyle.NATIVE}
              />
            </div>
          )}

          <svg
            className="cursor-pointer"
            onClick={() => hanldeSendMessage()}
            width="25"
            height="25"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.119902 11.9469C0.120677 12.6868 0.896959 13.1697 1.56103 12.8433L14.4683 6.4988L1.56089 0.154257C0.896848 -0.172146 0.120598 0.31064 0.119756 1.05056L0.115775 4.54974C0.115191 5.06321 0.503577 5.49368 1.0144 5.54573L10.3673 6.4988L1.06486 6.97276C0.532635 6.99988 0.115184 7.4396 0.115742 7.97251L0.119902 11.9469Z"
              fill="#BD1ECB"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default memo(ChatBox);
const messageType = (msg: any, userInfo: any) => {
  if (!msg?.is_message) return MESSAGE_TYPE.SYSTEM_MESSAGE;
  if (msg?.is_message && Number(userInfo?.id) === msg.user_id) {
    return MESSAGE_TYPE.MY_MESSAGE;
  }
  return MESSAGE_TYPE.USER_MESSAGE;
};
const MessageItem = ({ msg, prevMsg }: { msg: any; prevMsg: any }) => {
  const { userInfo } = useAuthContext();

  const isOfOnePerson = !prevMsg?.is_message
    ? false
    : msg?.user_id === prevMsg?.user_id
    ? true
    : false;

  // Replace ZERA
  const msgWithIcon = (msg: any) => (
    <span
      dangerouslySetInnerHTML={{
        __html: msg?.replace(
          "ZERA",
          renderToString(
            <Image
              src={zeraCoin}
              alt=""
              className="w-4 h-4 mt-[-2px] inline ml-0.5"
            />
          )
        ),
      }}
    />
  );
  const otherUserSystemMessageNode = useMemo(() => {
    if (msg?.user_id === userInfo.id) return;

    const [beforeUsername, afterUsername] = msg.message.split(
      msg?.user?.username
    );

    return (
      <>
        {beforeUsername}
        {
          <Link href={""} target="_blank" className="hover:text-[#a47efc]">
            {msg?.user?.username}
          </Link>
        }
        {msgWithIcon(afterUsername)}
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msg]);

  const MESSAGE_NODE: any = {
    SYSTEM_MESSAGE: (
      <p className="text-center text-xs py-2 text-white/50">
        {msg?.user_id === userInfo.id
          ? msgWithIcon(
              msg.message.replace(`Player ${userInfo?.username}`, "You")
            )
          : otherUserSystemMessageNode}
      </p>
    ),
    MY_MESSAGE: (
      <div className="flex justify-end mb-1">
        <div className="text-sm text-white bg-pink-500 rounded-xl py-1 px-2 break-all">
          {msg?.message}
        </div>
      </div>
    ),
    USER_MESSAGE: (
      <>
        {/* avatar, username */}
        {!isOfOnePerson && (
          <Link href={""} target="_blank">
            <header className="flex items-center gap-2 mb-1">
              <Image
                alt={msg?.user?.username}
                src={msg?.user?.avatar?.url || DEFAULT_AVATAR}
                width={500}
                height={500}
                className="w-8 h-8 rounded-full"
              />
              {/* username */}
              <div className="text-ellipsis text-[#ffffff80] overflow-hidden whitespace-nowrap w-fit max-w-[240px] break-words text-sm hover:text-purple-500">
                {msg?.user?.username}
              </div>
            </header>
          </Link>
        )}
        {/* message */}
        <div className="flex justify-start mb-1">
          <div className="text-sm text-white bg-violet-500 rounded-xl py-1 px-2 break-all">
            {msg?.message}
          </div>
        </div>
      </>
    ),
  };
  return <>{MESSAGE_NODE[messageType(msg, userInfo)]}</>;
};
