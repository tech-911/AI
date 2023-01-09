import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FiMonitor } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import Logo from "../../assets/logo.png";
import { CgDatabase } from "react-icons/cg";
import { MdOutlineMenu } from "react-icons/md";
import { RiRadioButtonLine } from "react-icons/ri";
import "./dash.scss";
import { useState } from "react";

function Dashboard({ siginOUt }) {
  const [sidebar, setSidebar] = useState(0);
  const path = useLocation().pathname;

  return (
    <div className="h-full dash_wrapper">
      <div className="flex items-start h-full dash_container">
        <div
          className={`bg-[#5d6a77] h-full dash_sidebar ${
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
              to="/dashboard/test1"
              className="hover:text-[#001A35] flex items-center text-[white] ml-6"
            >
              <div
                className={`flex items-center  ${
                  path.includes("test1") ? "border-r-8 border-r-[#001A35] text-[#001A35]" : ""
                } w-full py-3`}
              >
                <RiRadioButtonLine className="text-[24px]" />
                <p className="text-[15px] font-[inter] font-semibold ml-2">
                  Test 1
                </p>
              </div>
            </Link>
            <Link
              to="/dashboard/test2"
              className="hover:text-[#001A35] flex items-center text-[white] ml-6"
            >
              <div
                className={`flex items-center ${
                  path.includes("test2") ? "border-r-8 border-r-[#001A35] text-[#001A35]" : ""
                } w-full py-3`}
              >
                <RiRadioButtonLine className="text-[24px]" />
                <p className="text-[15px] font-[inter] font-semibold ml-2">
                  Test 2
                </p>
              </div>
            </Link>
            <Link
              to="/dashboard/test3"
              className="hover:text-[#001A35] flex items-center text-[white] ml-6"
            >
              <div
                className={`flex items-center ${
                  path.includes("test3") ? "border-r-8 border-r-[#001A35] text-[#001A35]" : ""
                } w-full py-3`}
              >
                <RiRadioButtonLine className="text-[24px]" />
                <p className="text-[15px] font-[inter] font-semibold ml-2">
                  Test 3
                </p>
              </div>
            </Link>
            <div
              onClick={() => {
                siginOUt();
              }}
              className="hover:text-[#001A35] flex items-center text-[white] ml-6 cursor-pointer"
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
            className="dash_hamburger cursor-pointer text-[black]"
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
