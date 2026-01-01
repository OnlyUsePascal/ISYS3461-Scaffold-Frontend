export interface Alpha {
  id: string;
  name: string;
  price: number;
}

export interface ListAlphaRes {
  content: Alpha[];
  number: number;
  size: number;
  totalPages: number;
  numberOfElements: number;
}

export interface CreateAlphaReq {
  name: string;
  price: number;
}

export interface UpdateAlphaReq {
  name: string;
  price: number;
}
