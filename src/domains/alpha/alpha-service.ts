import type { GenericResponseDto } from "@/types/http-response";
import { API_ENDPOINTS } from "@/utils/constants";
import apiClient from "@/utils/http-client";
import type {
  Alpha,
  CreateAlphaReq,
  ListAlphaRes,
  UpdateAlphaReq,
} from "./alpha-types";

export const alphaService = {
  async listAlphas(pageNo: number = 1, pageSz: number = 5) {
    const res = await apiClient.get<GenericResponseDto<ListAlphaRes>>(
      API_ENDPOINTS.ALPHA.LIST,
      {
        params: {
          pageNo,
          pageSz,
        },
      }
    );
    return res.data;
  },

  async getAlpha(id: string) {
    const res = await apiClient.get<GenericResponseDto<Alpha>>(
      API_ENDPOINTS.ALPHA.GET(id)
    );
    return res.data;
  },

  async createAlpha(body: CreateAlphaReq) {
    const res = await apiClient.post<GenericResponseDto<string>>(
      API_ENDPOINTS.ALPHA.CREATE,
      body
    );
    return res.data;
  },

  async updateAlpha(id: string, body: UpdateAlphaReq) {
    const res = await apiClient.patch<GenericResponseDto<string>>(
      API_ENDPOINTS.ALPHA.UPDATE(id),
      body
    );
    return res.data;
  },

  async deleteAlpha(id: string) {
    const res = await apiClient.delete<GenericResponseDto<string>>(
      API_ENDPOINTS.ALPHA.DELETE(id)
    );
    return res.data;
  },
};
