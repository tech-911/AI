import React, { Component } from "react";
import "./monitor.scss";
import { data } from "./graphData";
import BreadCrumb from "../../components/dashboardBreadcrumbs/BreadCrumb";

class Monitor extends Component {
  render() {
    return (
      <div className="monitor_wrapper flex flex-col h-[100%] w-[100%]">
        <BreadCrumb currentLink="Test2" />
        <div className="monitor_section flex flex-row justify-between mt-20">
          <div className="folderName">
            <label className="folderNameLabel" htmlFor="folderName">
              Folder Name
            </label>
            <input
              className="outline-[#5d6a77] mt-4 w-full folderNameInput"
              type="text"
              id="folderName"
            />
            <button className="mt-6 w-full folderNameButton">
              Create Folder
            </button>
          </div>
          <div className="capture">
            <div className="preview"></div>
            <button className="capture_button">Capture</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Monitor;
