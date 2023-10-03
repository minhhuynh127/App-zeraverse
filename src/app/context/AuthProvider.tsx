/* eslint-disable react-hooks/exhaustive-deps */
import {
  AUTHEN_PAGE_URL,
  PRIVATE_PAGE_URL,
  STATUS,
} from "@/src/app/utils/constant";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import {
  fetchDataArticle,
  getAllCategoryArticle,
} from "../services/article.service";
import { login } from "../services/auth-service";
import { fetchDataCategories } from "../services/category-service";
import {
  fetchDataGame,
  getAllPlaylist,
  getGamePopularWeek,
  getGameRecentlyPlayed,
  getLovedGames,
  getMostPlayed,
  getPurchaseHistory,
} from "../services/game-service";
import { getAchievements, getUser } from "../services/user-service";
import { isLogged } from "../utils/helper";
import { staticPaths } from "../utils/$path";
import {
  getTopGamePlayed,
  getTopPlaystreak,
  getTopZera,
} from "../services/half-of-fames-service";

type authProviderType = {
  userInfo: object | null;
  dataGames: Array<any>;
  dataCategories: Array<any>;
  dataArticles: Array<any>;
  // itemShops: Array<any>;
  token: string | null;
  username: string | null;
  loginEmail: (data: object) => void;
  errorPassword: string;
  getUserInfo: (username: string, token: string) => void;
  // getItemAvatarShop: (id: number) => void;
  isLoginEmail: boolean;
  activitiesInfo: any;
  dataMostPlayed: any;
  dataRecentPlayed: Array<any>;
  dataLovedGame: Array<any>;
  dataPlaylist: Array<any>;
  dataPurchaseHistory: any;
};
const AuthContext = createContext(null as any);

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error(
      "useAuthContext() can only be used inside of <AuthContextProvider />, " +
        "please declare it at a higher level."
    );
  }
  return useMemo(() => ({ ...authContext }), [authContext]);
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<object | null>({});
  const [dataGames, setDataGames] = useState<Array<any>>([]);
  const [dataCategories, setDataCategories] = useState<Array<any>>([]);
  const [dataArticles, setDataArticles] = useState<Array<any>>([]);
  const [token, setToken] = useState<string | null>(null);
  const [dataAchievements, setDataAchievements] = useState<any>({});
  const [cateArticle, setCateArticle] = useState<Array<any>>([]);
  const [topZera, setTopZera] = useState<Array<any>>([]);
  const [topGamePlayed, setTopGamePlayed] = useState<Array<any>>([]);
  const [topPlaystreak, setTopPlaystreak] = useState<Array<any>>([]);
  const [popularWeekGame, setPopularWeekGame] = useState<Array<any>>([]);

  const [username, setUsername] = useState<string | null>(null);
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [isLoginEmail, setIsLoginEmail] = useState<boolean>(false);
  const [activitiesInfo, setActivitiesInfo] = useState<any>({});
  const dataMostPlayed: any =
    activitiesInfo?.mostPlayed?.data?.game_detail ?? {};
  const dataRecentPlayed: Array<any> = activitiesInfo?.recentlyPlayed ?? [];
  const dataLovedGame: Array<any> = activitiesInfo?.lovedGame ?? [];
  const dataPlaylist: Array<any> = activitiesInfo?.playlist ?? [];
  const dataPurchaseHistory: any = activitiesInfo?.purchaseHistory ?? {};
  const [verifyStatus, setVerifyStatus] = useState(STATUS.NOT_START);
  const pathname = usePathname();
  const userInfoFunctions = [
    {
      key: "recentlyPlayed",
      callback: getGameRecentlyPlayed,
    },
    {
      key: "playlist",
      callback: getAllPlaylist,
    },
    {
      key: "purchaseHistory",
      callback: getPurchaseHistory,
    },
    {
      key: "mostPlayed",
      callback: getMostPlayed,
    },
    {
      key: "lovedGame",
      callback: getLovedGames,
    },
  ];

  const verifyAccessToken = async () => {
    if (verifyStatus === STATUS.SUCCESS) return;
    setVerifyStatus(STATUS.IN_PROGRESS);
    if (username && token) {
      getUser(username, token)
        .then((response: any) => {
          setUserInfo((prev) => ({ ...response?.data, ...prev }));
          setVerifyStatus(STATUS.SUCCESS);
        })
        .catch((e) => {
          setVerifyStatus(STATUS.FAIL);
          if (pathname === "/user-profile") {
            router.push("/login");
          } else {
            router.push("/");
          }

          if (e.code !== 401) {
            toast.error(`🦄 Please Login...!,`);
          }
          clearAuthenticatorData();
        });
    }
  };

  const clearAuthenticatorData = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");

    setToken(null);
    setUsername(null);
    setIsLoginEmail(false);
    setUserInfo({});
    setVerifyStatus(STATUS.NOT_START);
    setActivitiesInfo({});
    // setIsRedirectToPrevPage(false);
  };

  // Login Email
  const loginEmail = async (data: object) => {
    try {
      const result = await login(data);
      const { token, username } = result.data;

      if (!username) {
        setToken(token);
        localStorage.setItem("accessToken", token);
        toast.success("🦄 Success...!");
        return router.push("/create-username");
      } else {
        toast.success("🦄 Success...!");
        localStorage.setItem("accessToken", token);
        setToken(token);
        localStorage.setItem("username", username);
        setUsername(username);
        setIsLoginEmail(!isLoginEmail);
        router.push("/");
      }
    } catch {
      setErrorPassword("Invalid email or password");
    }
  };

  const logOut = () => {
    clearAuthenticatorData();
    // window.location.reload();
  };

  // Get user
  const getUserInfo = (username: string, token: string | null) => {
    getUser(username, token).then((response) => {
      setUserInfo(response?.data);
    });
  };
  // Get data Games
  const getDataGames = () => {
    fetchDataGame().then((response) => {
      setDataGames(response?.data.rows);
    });
  };

  // Get data Categories
  const getDataCategory = async () => {
    await fetchDataCategories().then((response) => {
      setDataCategories(response?.data);
    });
  };

  // Get data Articles
  const getDataArticle = () => {
    fetchDataArticle().then((response) => {
      setDataArticles(response?.data.rows);
    });
  };

  // Get Activities
  const getActivities = (info: string, token: string | null) => {
    if (!info) return;

    try {
      userInfoFunctions.map(({ key, callback }) =>
        callback(info, token)
          .then((data) =>
            setActivitiesInfo((prev: any) => ({
              ...(prev || {}),
              [key]: data,
            }))
          )
          .catch((e) => {
            throw e;
          })
      );
    } catch (e) {
      throw e;
    }
  };

  // Get Categories Article
  const getCateArticle = () => {
    getAllCategoryArticle().then((response) => {
      setCateArticle(response?.data?.rows);
    });
  };

  // Get Achiverments User
  const getAchievementsUser = (username: string, token: string) => {
    getAchievements(username, token).then((response) => {
      setDataAchievements(response?.data);
    });
  };

  // Get Top Zera Half of fames
  const getTopZeraUser = () => {
    getTopZera("high_to_low").then((response) => {
      setTopZera(response.data);
    });
  };

  // Get Top GamePlayed Half of fames
  const getTopGamePlayedUser = () => {
    getTopGamePlayed("high_to_low").then((response) => {
      setTopGamePlayed(response.data);
    });
  };

  // Get Top Playstreak Half of fames
  const getTopPlaystreakUser = () => {
    getTopPlaystreak("high_to_low").then((response) => {
      setTopPlaystreak(response.data);
    });
  };

  // Get Game Popular Week
  const getGamePopular = () => {
    getGamePopularWeek().then((response) => {
      setPopularWeekGame(response?.data);
    });
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const username = localStorage.getItem("username");
    setToken(accessToken || "");
    setUsername(username || "");
    // dispatch localstorage change event
    window.dispatchEvent(new Event("storage"));
    const listenStorageChange = () => {
      if (
        localStorage.getItem("username") !== username ||
        localStorage.getItem("accessToken") !== token
      ) {
        const newUserName = localStorage.getItem("username");
        const newToken = localStorage.getItem("accessToken");
        setUsername(newUserName);
        setToken(newToken);
        setVerifyStatus(STATUS.NOT_START);
      }
    };
    // listen localstorage change event
    window.addEventListener("storage", listenStorageChange);
    return () => window.removeEventListener("storage", listenStorageChange);
  }, []);

  useEffect(() => {
    getDataGames();
    getDataCategory();
    getDataArticle();
    getCateArticle();
    getTopZeraUser();
    getTopGamePlayedUser();
    getTopPlaystreakUser();
    getGamePopular();
    const token = localStorage.getItem("accessToken");
    const username = localStorage.getItem("username");
    setToken(token || "");
    setUsername(username || "");
    if (token && username) {
      getUserInfo(username, token);
      setIsLoginEmail(true);
      getActivities(username, token);
      getAchievementsUser(username, token);
    }
  }, []);

  useEffect(() => {
    if (username && token) {
      verifyAccessToken();
    }
  }, [username, token]);

  const authProvider: authProviderType = useMemo(
    () => ({
      clearAuthenticatorData,
      dataGames,
      dataCategories,
      dataArticles,
      username,
      token,
      loginEmail,
      logOut,
      userInfo,
      setUserInfo,
      errorPassword,
      getUserInfo,
      isLoginEmail,
      activitiesInfo,
      setActivitiesInfo,
      getActivities,
      dataMostPlayed,
      dataRecentPlayed,
      dataLovedGame,
      dataPlaylist,
      dataPurchaseHistory,
      verifyAccessToken,
      dataAchievements,
      cateArticle,
      topZera,
      topGamePlayed,
      topPlaystreak,
      popularWeekGame,
    }),
    [
      clearAuthenticatorData,
      userInfo,
      dataGames,
      dataCategories,
      dataArticles,
      username,
      setUserInfo,
      token,
      loginEmail,
      logOut,
      errorPassword,
      userInfo,
      getUserInfo,
      isLoginEmail,
      activitiesInfo,
      setActivitiesInfo,
      getActivities,
      dataMostPlayed,
      dataRecentPlayed,
      dataLovedGame,
      dataPlaylist,
      dataPurchaseHistory,
      verifyAccessToken,
      dataAchievements,
      cateArticle,
      topZera,
      topGamePlayed,
      topPlaystreak,
      popularWeekGame,
    ]
  );

  return (
    <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>
  );
};
