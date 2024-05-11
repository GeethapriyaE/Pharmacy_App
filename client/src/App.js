import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { Home, Login, AboutUs, ContactUs } from './components';
import { AnimatePresence } from 'framer-motion';
// import Cart from './components/Cart/Cart';
// import Product from './components/Product/Product';
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminRoutes from './Routers/AdminRoutes';
import AdminPannel from './Admin/AdminPannel';


const App = () => {

    return (
        <AnimatePresence>
            <div>
                <Routes>
                    {/* <Route path="/login" element={<Login />} /> */}
                    {/* <Route path="/aboutus" element={<AboutUs />} /> */}
                    {/* <Route path="/contactus" element={<ContactUs />} /> */}
                    {/* <Route path="/products" element={<Product />} /> */}
                    {/* <Route path="/*" element={<Home />} /> */}
                    <Route path="/*" element={<CustomerRoutes />} />    
        <Route path="/admin/*" element={<AdminPannel />} />

                </Routes>
            </div>
        </AnimatePresence>
    );
};

export default App;
