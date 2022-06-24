import React from 'react';
import { useContext } from 'react';
import { Routes, Route, Navigate  } from 'react-router-dom';
import { Context } from '..';
import Admin from '../pages/Admin';
import Auth from '../pages/Auth';
import Basket from '../pages/Basket';
import DevicePage from '../pages/DevicePage';
import Shop from '../pages/Shop';
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && <Route path={ADMIN_ROUTE} element={<Admin />} />}
            {user.isAuth && <Route path={BASKET_ROUTE} element={<Basket />} />}
            
            <Route path={REGISTRATION_ROUTE} element={<Auth />} />
            <Route path={LOGIN_ROUTE} element={<Auth />} />
            <Route path={SHOP_ROUTE} element={<Shop />} />
            <Route path={DEVICE_ROUTE} element={<DevicePage />} />
            <Route
                path="*"
                element={<Navigate to="shop" replace />}
            />
        </Routes>
    );
};

export default AppRouter;