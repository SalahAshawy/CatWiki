

import { useSelector } from "react-redux";

export function useAuth() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  return isLoggedIn;
}

export function useAdmin() {
  const user = useSelector((state) => JSON.parse(state.user.userInfo));
  return user && user.role === "admin";
}
