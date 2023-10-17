export const useGetUserInfo = () => {
    const { name, avatar, userID, isAuth } =
      JSON.parse(localStorage.getItem("auth")) || {};
    return { name, avatar, userID, isAuth };
  };