import {axiosInstance} from "./auth/instance";
import Endpoints from "./auth/endpoints";

export const login = (params) => {
  return axiosInstance.post(Endpoints.Auth.LOGIN, params);
};
