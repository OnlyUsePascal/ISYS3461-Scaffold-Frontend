import type { GenericResponseDto } from "@/types/http-response";
import { API_ENDPOINTS } from "@/utils/constants";
import apiClient from "@/utils/http-client";
import type {
  MyProfileRes,
  SignInReq,
  SignInRes,
  SignUpReq,
  SignUpRes,
} from "./auth-types";

export const authService = {
  async signIn(req: SignInReq) {
    const response = await apiClient.post<GenericResponseDto<SignInRes>>(
      API_ENDPOINTS.AUTH.SIGN_IN,
      req
    );

    return response.data;
  },

  async signUp(req: SignUpReq) {
    const response = await apiClient.post<GenericResponseDto<SignUpRes>>(
      API_ENDPOINTS.AUTH.SIGN_UP,
      req
    );
    return response.data;
  },

  async getMyProfile(token: string) {
    const response = await apiClient.get<GenericResponseDto<MyProfileRes>>(
      API_ENDPOINTS.USER.ME,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
};
