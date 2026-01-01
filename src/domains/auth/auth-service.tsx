import type { GenericResponseDto } from "@/types/http-response";
import { API_ENDPOINTS } from "@/utils/constants";
import apiClient from "@/utils/http-client";

export interface SignInRes {
  token: string;
}

export interface SignUpRes {
  token: string;
}

export const authService = {
  async signIn(email: string, password: string) {
    const response = await apiClient.post<GenericResponseDto<SignInRes>>(
      API_ENDPOINTS.USER.SIGN_IN,
      {
        email,
        password,
      }
    );

    return response.data;
  },

  async signUp(
    email: string,
    password: string,
    name: string,
    address?: string
  ) {
    const response = await apiClient.post<GenericResponseDto<SignUpRes>>(
      API_ENDPOINTS.USER.SIGN_UP,
      {
        email,
        password,
        name,
        address,
      }
    );
    return response.data;
  },
};
