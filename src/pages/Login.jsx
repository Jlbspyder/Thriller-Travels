import React from 'react'
import { useNavigate, Navigate } from "react-router-dom";
import { auth, provider } from "../auth/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useGetUserInfo } from '../hooks/useGetUserInfo';

const Login = () => {
    const navigate = useNavigate();
    const { isAuth } = useGetUserInfo()
    const handleClick = async () => {
      const res = await signInWithPopup(auth, provider);
      const authInfo = {
        userID: res.user.uid,
        name: res.user.displayName,
        avatar: res.user.photoURL,
        isAuth: true,
      };
      localStorage.setItem("auth", JSON.stringify(authInfo));
      navigate("/homepage");
    };
  
    if (isAuth) {
      return <Navigate to='/homepage' />
    }
  return (
    <>
       <div className='enter'>
        <h2>MimaBooking</h2>
      </div>
      
      <div className="log-in">
        <div className="sign-in">Please sign in with google to continue</div>
        <button
          className="buton"
          onClick={handleClick}
        >
          Sign In
        </button>
      </div>
    </>
  )
}

export default Login
