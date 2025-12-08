export interface UserRegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface UserLoginPayload {
  email: string;
  password: string;
}
