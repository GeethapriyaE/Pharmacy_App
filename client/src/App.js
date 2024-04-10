import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Home, Login, AboutUs ,ContactUs} from './components'
import { useEffect } from 'react';
import { app } from './config/firebase.config'
import { getAuth } from 'firebase/auth';

import { AnimatePresence } from 'framer-motion'
import { validateUser } from './api';
import { actionType } from './context/reducer';
import { useStateValue } from './context/StateProvider';
import Product from './components/Product/Product';
import Productdetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Order from './components/Order/Order';
const App = () => {

    const [{ user }, dispatch] = useStateValue();
    const firebaseAuth = getAuth(app);
    const navigate = useNavigate();


    const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true");

    useEffect(() => {
        firebaseAuth.onAuthStateChanged((userCred) => {
            if (userCred) {
                userCred.getIdToken().then((token) => {
                    //console.log(token);
                    validateUser(token).then((data) => {
                        dispatch({
                            type: actionType.SET_USER,
                            user: data,
                        });
                    });
                });
            } else {
                setAuth(false);
                window.localStorage.setItem("auth", "false");
                dispatch({
                    type: actionType.SET_USER,
                    user: null,
                });
                navigate("/login");
            }
        })
    }, [])
    return (
        <AnimatePresence >
            <div >
                <Routes>
                    <Route path='/login' element={<Login setAuth={setAuth} />} />
                    <Route path='/*' element={<Home />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/products' element={<Order />} />
                    <Route path='/contactus' element={<ContactUs />} />
                </Routes>
            </div>
        </AnimatePresence>
    )
}

export default App