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
