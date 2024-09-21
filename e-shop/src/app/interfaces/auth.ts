export interface Sigup {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface SendMail {
  email: string;
}

export interface VerifyCode {
  resetCode: string;
}

export interface ResetPassword {
  password: string;
  confirmPassword: string;
}
