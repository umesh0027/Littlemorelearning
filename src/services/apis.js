const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
  // SENDOTP_API: "http://localhost:4000/api/v1/auth/sendotp",
  // SIGNUP_API:  "http://localhost:4000/api/v1/auth/signup",
  // LOGIN_API:  "http://localhost:4000/api/v1/auth/login",
  // RESETPASSTOKEN_API:  "http://localhost:4000/api/v1/auth/reset-password-token",
  // RESETPASSWORD_API:  "http://localhost:4000/api/v1/auth/reset-password",

  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}


