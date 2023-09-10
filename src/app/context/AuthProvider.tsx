/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { fetchDataGame } from "../services/game-service";
import { fetchDataCategories } from "../services/category-service";
import { fetchDataArticle } from "../services/article.service";
import { login } from "../services/auth-service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getUser } from "../services/user-service";

type authProviderType = {
  userInfo: object | null;
  dataGames: Array<any>;
  dataCategories: Array<any>;
  dataArticles: Array<any>;
  token: string | null;
  username: string | null;
  loginEmail: any;
  errorPassword: string;
  getUserInfo: any;
  isLoginEmail: boolean;
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
  const [username, setUsername] = useState<string | null>(null);
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [isLoginEmail, setLoginEmail] = useState<boolean>(false);
  const loginEmail = async (data: object) => {
    try {
      const result = await login(data);
      const { token, username } = result.data;
      if (!username) {
        setToken(token);
        localStorage.setItem("accessToken", token);
        toast.success("🦄 Success...!", {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return router.push("/create-username");
      } else {
        toast.success("🦄 Success...!", {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.setItem("accessToken", token);
        setToken(token);
        localStorage.setItem("username", username);
        setUsername(username);
        setLoginEmail(!isLoginEmail);
        router.push("/");
      }
    } catch {
      setErrorPassword("Invalid email or password");
    }
  };
  const getUserInfo = (username: string) => {
    getUser(username).then((response) => {
      setUserInfo(response?.data);
    });
  };
  const getDataGames = () => {
    fetchDataGame().then((response) => {
      setDataGames(response?.data.rows);
    });
  };

  const getDataCategory = async () => {
    await fetchDataCategories().then((response) => {
      setDataCategories(response?.data);
    });
  };

  const getDataArticle = () => {
    fetchDataArticle().then((response) => {
      setDataArticles(response?.data.rows);
    });
  };
  useEffect(() => {
    getDataGames();
    getDataCategory();
    getDataArticle();
    const token = localStorage.getItem("accessToken");
    const username = localStorage.getItem("username");

    setToken(token || null);
    setUsername(username || null);
  }, []);
  const authProvider: authProviderType = useMemo(
    () => ({
      userInfo,
      dataGames,
      dataCategories,
      dataArticles,
      username,
      token,
      loginEmail,
      errorPassword,
      getUserInfo,
      isLoginEmail,
    }),
    [
      userInfo,
      dataGames,
      dataCategories,
      dataArticles,
      username,
      token,
      loginEmail,
      errorPassword,
      getUserInfo,
      isLoginEmail,
    ]
  );

  return (
    <AuthContext.Provider value={authProvider}>{children}</AuthContext.Provider>
  );
};
