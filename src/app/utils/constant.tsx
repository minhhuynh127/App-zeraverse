import { staticPaths } from "./$path";

export const STATUS = {
  NOT_START: "NOT_START",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
  INIT: "INIT",
};

export const AUTHEN_PAGE_URL = {
  LOGIN: staticPaths.login,
  REGISTER: staticPaths.register,
  FORGOT_PASSWPORD: staticPaths.forgot_password,
  RESET_PASSWPORD: staticPaths.reset_password,
};

export const PRIVATE_PAGE_URL = {
  SHOP: staticPaths.shop,
  MY_HALL_OF_FAME: staticPaths.achievements,
  PROFILE: staticPaths.profile,
};

export const SOCKET_EVENT = {
  LISTEN_MESSAGE: "message",
  LIST_USERS_JOIN_ROOM: "roomUsers",
  USER_JOIN_ROOM: "joinRoom",
  USER_LEAVE_ROOM: "leaveRoom",
  USER_SWITCH_GAME: "switchGame",
  USER_BUY_TIME: "userBuyTime",
  USER_DUPLICATE_LOGIN: "duplicateLogin",
  USER_STOP_PLAY: "stopPlay",
  USER_PLAY_GAME: "playGame",
  USER_SEND_MESSAGE: "chatMessage",
  OUT_OF_TIME: "outOfTime",
  SERVER_CONNECT_ERROR: "connect_error",
  SERVER_DISCONNECT: "disconnect",
  CONNECT_SUCCESS: "connectSuccess",
  PLAY_TIME: "playTime",

  // USER_EMIT_REWARD: "emitReward",
  // USER_LOGIN: "userLogin",
  // USER_LOGOUT: "userLogout",
  // LOGGED_IN_USER: "loggedInUser",
  // STOP_GAME: "stopGame",
  // SOCKET_ERROR: "error",
  // TIME_GAME: "timeGame",
};

export const MESSAGE_TYPE = {
  SYSTEM_MESSAGE: "SYSTEM_MESSAGE",
  MY_MESSAGE: "MY_MESSAGE",
  USER_MESSAGE: "USER_MESSAGE",
};
