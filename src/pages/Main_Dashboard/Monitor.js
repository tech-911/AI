import React, { useRef, useState, useEffect } from "react";
import "./monitor.scss";
import axios from "axios";

const Monitor = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [vstream, setVstream] = useState(null);
  const [stopStream, setStopStream] = useState(0);
  const [folder, setFolder] = useState("");
  const [idValue, setIdValue] = useState(0);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const folderRef = useRef();

  const capture = async () => {
    setIdValue(idValue + 1);
    console.log(idValue);
    const context = canvasRef.current.getContext("2d");
    context.drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    // setImageSrc(canvasRef.current.toDataURL("image/webp", 0.6));
    // console.log(
    //   "Image Data: ",
    //   canvasRef.current.toDataURL("image/webp", 0.6).split(",")[1]
    // );
    try {
      const imageRes = await axios.post("http://127.0.0.1:4000/capture", {
        id: idValue,
        folder_name: folder,
        image: canvasRef.current.toDataURL("image/webp", 0.6).split(",")[1],
      });
      console.log("ImageResponse: ", imageRes);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const startVideo = async () => {
    setStopStream(!stopStream);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      setVstream(stream);
      videoRef.current.srcObject = stream;
      await videoRef.current.play();
    } catch (err) {
      console.error(err);
    }
  };

  const createFolder = async () => {
    try {
      const folderRes = await axios.post("http://127.0.0.1:4000/register", {
        folder_name: folder,
      });
      console.log(folderRes);
      folderRef.current.value = "";
    } catch (error) {
      console.log("Error: ", error);
      folderRef.current.value = "";
    }
  };
  const handleFolder = (e) => {
    setFolder(e.target.value);
  };

  const endVideo = async () => {
    videoRef.current.srcObject = null;
    videoRef.current.pause();
    setStopStream(!stopStream);
    vstream.getTracks().forEach((track) => track.stop());
    setVstream(null);
  };

  return (
    <div className="monitor_wrapper flex flex-col h-[100%] w-[100%]">
      {/* <BreadCrumb currentLink="Test2" /> */}
      <div className="monitor_section flex flex-row justify-between mt-20">
        <div className="folderName">
          <label className="folderNameLabel" htmlFor="folderName">
            Folder Name
          </label>
          <input
            ref={folderRef}
            onChange={(e) => {
              handleFolder(e);
            }}
            className="outline-[#5d6a77] mt-4 w-full folderNameInput"
            type="text"
            id="folderName"
          />
          <button
            onClick={createFolder}
            className="mt-6 w-full folderNameButton"
          >
            Create Folder
          </button>
        </div>
        <div className="capture">
          <div className="preview flex flex-col items-center justify-center">
            <video ref={videoRef} className="w-full rounded-[8px]" />
          </div>
          <div className="capture_button_wrapper ">
            <button onClick={capture} className="capture_button1">
              Capture
            </button>
            <button
              onClick={stopStream ? endVideo : startVideo}
              className="capture_button2"
            >
              {stopStream ? "Stop Preview" : "Start Preview"}
            </button>
          </div>
        </div>
      </div>
      <div className="hidden">
        <canvas ref={canvasRef} width="640" height="480" />
      </div>
    </div>
  );
};
export default Monitor;
