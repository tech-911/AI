import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import "./breadCrumb.scss";
const BreadCrumb = ({ currentLink }) => {
  return (
    <div className="flex items-center font-[inter] bread_crumb">
      <Link to="/dashboard/test1" className="link1">
        <p className="link_item1">Dashboard</p>
      </Link>
      <IoIosArrowForward className="mx-2 text-[20px]" />
      <Link to={""} className="link1">
        <p className="link_item1">{currentLink}</p>
      </Link>
    </div>
  );
};

export default BreadCrumb;
