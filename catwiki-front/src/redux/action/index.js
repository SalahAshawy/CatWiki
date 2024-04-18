
export const setLoginState = (isLoggedIn) => {
  return {
      type: "SET_LOGIN_STATE",
      payload: isLoggedIn
  }
}

export const setAccessToken = (accessToken) => ({
  type: "SET_ACCESS_TOKEN",
  payload: accessToken
});

export const clearAccessToken = () => ({
  type: "CLEAR_ACCESS_TOKEN"
});
// actions.js
export const setUserInfo = (userInfo) => ({
  type: "SET_USER_INFO",
  payload: userInfo,
});

export const clearUserInfo = () => ({
  type: "CLEAR_USER_INFO",
});






