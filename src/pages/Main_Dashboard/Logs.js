import React, { useRef, useState } from "react";
import "./logs.scss";
import BreadCrumb from "../../components/dashboardBreadcrumbs/BreadCrumb";
const Logs = () => {
  return (
    <div className="logs_wrapper overflow-x-hidden">
      <BreadCrumb currentLink="Test3" />
      <div></div>
    </div>
  );
};

export default Logs;
