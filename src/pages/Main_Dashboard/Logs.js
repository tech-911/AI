import React, { useEffect, useRef, useState } from "react";
import "./logs.scss";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Logs = () => {
  const imageRef = useRef();
  const [result, setResult] = useState("");
  const [predict, setPredict] = useState(0);

  const handleSave = async () => {
    setPredict(1);
    const formData = new FormData();
    formData.append("file", imageRef.current.files[0]);
    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", formData);
      console.log(res);
      toast.success(`Done Predicting`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      res?.data?.result?.name === "unknown"
        ? setResult("Access Denied")
        : setResult(`Access Granted: ${res?.data?.result?.name}`);
      setPredict(0);
    } catch (err) {
      toast.error(`Error Predicting`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setPredict(0);
      console.log(err);
    }
  };
  return (
    <div className="logs_wrapper overflow-x-hidden">
      <ToastContainer />
      <div className="logs_file_wrap">
        <FaCloudUploadAlt className="logs_file_icon" />
        <p className="logs_file_text">{imageRef.current?.files[0]?.name}</p>
        <label htmlFor="inputFile" className="logs_file_label">
          Upload Image
        </label>
        <input
          ref={imageRef}
          id="inputFile"
          type="file"
          className="logs_file_input"
        />
      </div>
      <div className="logs_folderName">
        <label className="logs_folderNameLabel" htmlFor="folderName">
          Preduction Result
        </label>
        <input
          className="outline-[#5d6a77] mt-4 w-full logs_folderNameInput"
          type="text"
          readOnly={1}
          value={result}
        />
        <button
          onClick={handleSave}
          className="mt-6 w-full logs_folderNameButton"
        >
          {predict ? "Loading..." : "Predict"}
        </button>
      </div>
    </div>
  );
};

export default Logs;
