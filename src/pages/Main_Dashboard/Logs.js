import React from "react";
import { data } from "./data";
import { GiCheckMark } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import "./logs.scss";
import BreadCrumb from "../../components/dashboardBreadcrumbs/BreadCrumb";
const Logs = () => {
  return (
    <div className="logs_wrapper overflow-x-hidden">
      <BreadCrumb currentLink="Test3"/>
    </div>
  );
};

export default Logs;
