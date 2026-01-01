export interface SignInReq {
  username: string;
  password: string;
}

export interface SignInRes {
  token: string;
}

export interface SignUpReq {
  email: string;
  password: string;
  name: string;
  address?: string;
}

export interface SignUpRes {
  token: string;
}

export interface MyProfileRes {
  id: string;
  name: string;
  address: string;
}
