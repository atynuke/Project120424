import React from "react";
import { Outlet } from "react-router-dom";
import { SideNav } from "../Components/Navigations/Side/SideNav";
import "./MainLayout.css"

export const MainLayout = () => {
  return (
    <div className="layout">
      
      
      <div id="sideNav">
        <SideNav />
      </div>

      <div id="display
      ">
        <Outlet />
      </div>
    </div>
  );
};
