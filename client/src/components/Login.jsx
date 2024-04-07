import React, { useEffect } from 'react'

import { app } from '../config/firebase.config'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { FcGoogle } from 'react-icons/fc'
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import { validateUser } from '../api'
import { LoginBg } from '../assets/video'

import "./Login.css";
const Login = ({ setAuth }) => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const navigate = useNavigate();

    const [{ user }, dispatch] = useStateValue();


    const handleRegisterClick = () => {
        navigate('/register'); 
    }
    
    const loginWithGoogle = async () => {
        await signInWithPopup(firebaseAuth, provider).then((userCred) => {
            if (userCred) {
                setAuth(true);
                window.localStorage.setItem("auth", "true");
                firebaseAuth.onAuthStateChanged((userCred) => {
                    if (userCred) {
                        userCred.getIdToken().then((token) => {
                            validateUser(token).then((data) => {
                                dispatch({
                                    type: actionType.SET_USER,
                                    user: data
                                });

                            });
                        })
                        navigate("/", { replace: true })
                    }
                    else {
                        setAuth(false);
                        dispatch({
                            type: actionType.SET_USER,
                            user: null
                        })
                        navigate("/login")
                    }
                })
            }
        })
    }

    useEffect(() => {
        if (window.localStorage.getItem("auth") == "true") {
            navigate("/", { replace: true })
        }
    }, [])


    return (
        <div className='relative w-screen h-screen'>
            <video src={LoginBg}
                type="video/mp4"
                autoPlay
                muted
                loop
                className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-darkOverlay flex items-center justify-center p-4'>
                <div className='w-full md:w-375 p-4 shadow-2xl rounded-md  flex flex-col items center justify-center'>
                    <div className='wrapper'>
                        <form action="">
                            <h1>Login</h1>
                            <div className="input-box">
                                <input type="text" placeholder='Username' required />
                                <FaUser className='icon' />
                            </div>
                            <div className="input-box">
                                <input type="password" placeholder='Password' required />
                                <FaLock className='icon' />
                            </div>

                            <div className="remember-forgot">
                                <label><input type="checkbox" />Remember me</label>
                                <a href="#">Forgot Password?</a>
                            </div>

                            <button type="submit" >Login</button>

                            <div className="register-link">
                                <p>Don't have an account? <a href="#" onClick={handleRegisterClick}>Register</a></p>
                            </div>
                        </form>
                        <div className='flex items-center justify-center  gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all'
                            onClick={loginWithGoogle}>

                            <FcGoogle className='text-xl' />
                            Sign in with Google
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login