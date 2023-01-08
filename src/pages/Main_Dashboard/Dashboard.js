import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FiMonitor } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import Logo from "../../assets/logo.png";
import { CgDatabase } from "react-icons/cg";
import { MdOutlineMenu } from "react-icons/md";
import "./dash.scss";
import { useState } from "react";

function Dashboard({ siginOUt }) {
  const [sidebar, setSidebar] = useState(0);
  const path = useLocation().pathname;

  return (
    <div className="h-full dash_wrapper">
      <div className="flex items-start h-full dash_container">
        <div
          className={`bg-[#01336A] h-full dash_sidebar ${
            sidebar ? "dash_sidebarOpen" : "dash_sidebarClose"
          }`}
        >
          <div className="flex flex-col items-center mt-10">
            <img src={Logo} alt="university of ibadan" className="mb-10" />
            {/* <h1 className="mb-10 font-[inter] text-[20px] text-[white] font-semibold">
              IS4RM
            </h1> */}
          </div>

          <div>
            <Link
              to="/dashboard/about"
              className="flex items-center text-[white] ml-6"
            >
              <div
                className={`flex items-center  ${
                  path.includes("about") ? "border-r-8" : ""
                } w-full py-3`}
              >
                <BsInfoCircle className="text-[24px]" />
                <p className="text-[15px] font-[inter] font-semibold ml-2">
                  About
                </p>
              </div>
            </Link>
            <Link
              to="/dashboard/monitor"
              className="flex items-center text-[white] ml-6"
            >
              <div
                className={`flex items-center ${
                  path.includes("monitor") ? "border-r-8" : ""
                } w-full py-3`}
              >
                <FiMonitor className="text-[24px]" />
                <p className="text-[15px] font-[inter] font-semibold ml-2">
                  Monitor
                </p>
              </div>
            </Link>
            <Link
              to="/dashboard/logs"
              className="flex items-center text-[white] ml-6"
            >
              <div
                className={`flex items-center ${
                  path.includes("logs") ? "border-r-8" : ""
                } w-full py-3`}
              >
                <CgDatabase className="text-[24px] text-[white]" />
                <p className="text-[15px] font-[inter] font-semibold ml-2">
                  Logs
                </p>
              </div>
            </Link>
            <div
              onClick={() => {
                siginOUt();
              }}
              className="flex items-center text-[white] ml-6 cursor-pointer"
            >
              <div className="flex items-center w-full py-3">
                <TbLogout className="text-[24px]" />
                <p className="text-[15px] font-[inter] font-semibold ml-2">
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            setSidebar(!sidebar);
          }}
          className={`dash_overlay ${
            sidebar ? "dash_overlayOpen" : "dash_overlayClose"
          }`}
        ></div>
        <div className="outlet-body w-screen h-full outlet-media overflow-x-hidden dash_outlet">
          <MdOutlineMenu
            className="dash_hamburger cursor-pointer text-[white]"
            onClick={() => {
              setSidebar(!sidebar);
            }}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// <div className="outlet-body pl-52 md:pl-64 lg:pl-[24rem] xl:pl-[29rem] w-screen h-screen outlet-media">
//   <Outlet />
// </div>;
