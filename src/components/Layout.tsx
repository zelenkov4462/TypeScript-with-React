import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <div>
        <NavLink to="/users">Пользователи</NavLink>
        <NavLink to="/todos">Список дел</NavLink>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
