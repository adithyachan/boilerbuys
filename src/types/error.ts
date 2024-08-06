// Login
type LoginCode = "email" | "password" | "auth" | "network" | "other";

type LoginError = {
  code: LoginCode;
  message: string;
};

// Signup
type SignUpCode =
  | "firstname"
  | "lastname"
  | "email"
  | "password"
  | "confirm"
  | "auth"
  | "network"
  | "other";

type SignUpError = {
  code: SignUpCode;
  message: string;
};

export type { LoginCode, SignUpCode, SignUpError, LoginError };
