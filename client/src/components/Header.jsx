import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { isActiveStyles, isNotActiveStyles } from '../utils/styles';
import { useSelector } from "react-redux";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import AuthModal from "../Auth/AuthModal";
import { ShoppingBagIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { deepPurple } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { getUser, logout } from "../Redux/Auth/Action";
import { getCart } from "../Redux/Customers/Cart/Action";

const Header = () => {
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const openUserMenu = Boolean(anchorEl);
    const { auth, cart } = useSelector((store) => store);
    const jwt = localStorage.getItem("jwt");
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const handleCloseUserMenu = (event) => {
        setAnchorEl(null);
      };
    const handleClose = () => {
        setOpenAuthModal(false);
    };

    const handleOpen = () => {
        setOpenAuthModal(true);
    };
    const handleUserClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    const handleLogout = () => {
        handleCloseUserMenu();
        dispatch(logout());
    };
    const handleMyOrderClick = () => {
        //handleCloseUserMenu()
        navigate("/account/order")
    }

    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt));
            dispatch(getCart(jwt));
        }
    }, [jwt]);


    useEffect(() => {
        if (auth.user) {
            handleClose();
        }
        if (auth.user?.role !== "ADMIN" && (location.pathname === "/login" || location.pathname === "/register")) {
            navigate(-1)
        }
    }, [auth.user]);

    return (
        <div className='flex items-center w-full p-2 md:py-2 md:px-6'>
            <header className='flex items-center w-full p-2 md:py-2 md:px-6'>
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


                <div className="ml-auto flex items-center">
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                        {auth.user ? (
                            <div>
                                <Avatar
                                    className="text-white"
                                    onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                                    sx={{
                                        bgcolor: deepPurple[500],
                                        color: "white",
                                        cursor: "pointer",
                                    }}
                                >
                                    {auth.user?.firstName[0].toUpperCase()}
                                </Avatar>
                                <Menu
                                    id="basic-menu"
                                     anchorEl={anchorEl}
                                     open={openUserMenu}
                                     onClose={handleCloseUserMenu}
                                    MenuListProps={{ "aria-labelledby": "basic-button" }}
                                >
                                    <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                                    <MenuItem onClick={handleMyOrderClick}>My Orders</MenuItem>
                                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                </Menu>
                            </div>
                        ) : (
                            <Button onClick={handleOpen} className="text-sm font-medium text-gray-700 hover:text-gray-800">Signin</Button>
                        )}
                    </div>

                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-6">
                        <Button onClick={() => navigate("/cart")} className="group -m-2 flex items-center p-2">
                            <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                                {cart.cart?.totalItem}
                            </span>
                            <span className="sr-only">items in cart, view bag</span>
                        </Button>
                    </div>
                </div>
            </header>
            <AuthModal handleClose={handleClose} open={openAuthModal} />
        </div>
    );
};

export default Header;
