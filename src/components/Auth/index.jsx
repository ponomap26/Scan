import {axiosInstance} from "./instance";
import Endpoints from "./endpoints";

export const login = (params) => {
  return axiosInstance.post(Endpoints.Auth.LOGIN, params);
};
