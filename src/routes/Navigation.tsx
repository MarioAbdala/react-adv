import { Suspense } from "react";
import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom";
import { routes } from './routes';

import logo from '../logo.svg';


export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {routes.map(({to, name}) => (<li key={to}>
                                <NavLink to={to} className={({isActive}) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                            </li>))}
                        </ul>
                    </nav>
                    <Routes>
                        {routes.map(({path, Component}) => (
                            <Route path={path} key={path} element={<Component />} />
                        ))}
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
};