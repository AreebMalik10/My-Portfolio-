import { ADMIN_LOGIN_URL } from "./constants";
import { get, post } from "./utils";

export const loginApi = (payload: any) => {
  return post(ADMIN_LOGIN_URL, payload, {});
};


