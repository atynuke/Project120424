import React from "react";
import { Links } from "../../Links/Links";
import { AiOutlineLogin, AiOutlineUser, AiOutlineSetting, AiOutlineHome,} from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md";
import "./SideNav.css";

export const SideNav = () => {
  const paths = [
    {
      path: "/",
      label: "Home",
      icon: <AiOutlineHome />,
    },
    // {
    //   path: "/login",
    //   label: "Login",
    //   icon: <AiOutlineLogin />,
    // },
    {
      path: "/users",
      label: "Users",
      icon: <AiOutlineUser />,
    },
    {
      path: "/admin",
      label: "Admin",
      icon: <MdAdminPanelSettings />,
    },
    {
      path: "/setting",
      label: "Setting",
      icon: <AiOutlineSetting />,
    },
  ];

  return (
    <div className="layout">
      <div className="layout_links">
        <Links to={"/"} Label={"Home"} />
        <Links to={"/users"} Label={"Users"} />
        <Links to={"/admin"} Label={"Admin"} />
        <Links to={"/settings"} Label={"Settings"} />
        {/*         
        <Links to={"/"} Label={"Home"} icon={<AiOutlineLogin />} />
        <Links to={"/users"} Label={"Users"} icon={<AiOutlineUser />} />
        <Links to={"/settings"} Label={"Setting"} icon={<AiOutlineSetting />} />
         */}

         {/* {paths.map((to, label, icon))} */}
        {paths.map((path, index) => {
          return (        
            <Links key={index} to={path.path} label={path.label} icon={path.icon}/>
          );
        })}
      </div>
    </div>
  );
};
