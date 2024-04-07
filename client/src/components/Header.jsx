import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { isActiveStyles, isNotActiveStyles } from '../utils/styles';
import { useStateValue } from '../context/StateProvider';
import { app } from '../config/firebase.config';
import { getAuth } from 'firebase/auth';
import { motion } from 'framer-motion';
import { ShoppingBagIcon} from '@heroicons/react/24/outline'

const Header = () => {
    const [{ user }, dispatch] = useStateValue();
    const [isMenu, setIsMenu] = useState(false);
    const navigate = useNavigate();

    const logOut = () => {
        const firebaseAuth = getAuth(app);
        firebaseAuth.signOut().then(() => {
            window.localStorage.setItem("auth", "false");
        }).catch((e) => console.log(e));
        navigate("/login", { replace: true });
    };

    return (
        <header className='flex items-center w-full p-4 md:py-2 md:px-6'>
            <NavLink to={"/"}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <strong style={{ color: '#75b239', fontSize: '26px', marginRight: '2px', '@media (maxWidth: 768px)': { fontSize: '14px' } }}>K.P.S</strong>
                    <p style={{ color: '#000000', fontSize: '20px', '@media (maxWidth: 768px)': { fontSize: '16px' } }}>Medicals</p>
                </div>
            </NavLink>
            <ul className='flex items-center justify-center ml-7'>
                <li className='mx-5 text-lg'><NavLink to={'/home'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Home</NavLink></li>
                <li className='mx-5 text-lg'><NavLink to={'/products'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Products</NavLink></li>
                <li className='mx-5 text-lg'><NavLink to={'/aboutus'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>About Us</NavLink></li>
                <li className='mx-5 text-lg'><NavLink to={'/contactus'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Contact Us</NavLink></li>
            </ul>

            <div className="flex items-center ml-auto space-x-4"> {/* Added space-x-4 for spacing between icons */}
                <a href="#" className="group flex items-center p-2 ml-4"> {/* Added ml-4 to move the shopping bag icon away from the user icon */}
                <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true" />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                <span className="sr-only">items in cart, view bag</span>
            </a>
    <   div className='flex items-center cursor-pointer gap-2 relative'> {/* Removed ml-auto from this container */}
        <img src={user?.user.imageURL} className='w-12 min-w-[44px] object-cover rounded-full shadow-lg' alt="" referrerPolicy='no-referrer' />
        <div className='flex flex-col'>
            <p className='text-textColor text-lg hover:text-headingColor font-semibold'>{user?.user?.name}</p>
        </div>
        {isMenu && (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className='absolute z-10 flex flex-col p-2 top-12 right-0 w-275 gap-2 bg-card shadow-lg rounded-lg backdrop-blur-sm'>
                <NavLink to={'/UserProfile'}>
                    <p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>Profile</p>
                </NavLink>
                <hr />
                {user?.user?.role === "admin" && (
                    <>
                        <NavLink to={"/dashboard/home"}>
                            <p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>Dashboard</p>
                        </NavLink>
                        <hr />
                    </>
                )}
                <p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out' onClick={logOut}>Sign Out</p>
            </motion.div>
        )}
    </div>

    
</div>

        </header>
    );
};

export default Header;
