import React, { useRef, useState } from "react";
import "./monitor.scss";
import BreadCrumb from "../../components/dashboardBreadcrumbs/BreadCrumb";

const Monitor = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [stopStream, setStopStream] = useState(0);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const capture = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    setImageSrc(canvasRef.current.toDataURL("image/webp", 0.6));
    console.log("Image Data: ",canvasRef.current.toDataURL("image/webp", 0.6).split(',')[1]);
  };

  const startVideo = async () => {
    setStopStream(!stopStream);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      videoRef.current.srcObject = stream;
      await videoRef.current.play();
    } catch (err) {
      console.error(err);
    }
  };
  const endVideo = () => {
    videoRef.current.srcObject = null;
    videoRef.current.pause();
    setStopStream(!stopStream);
  };

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
          <div className="preview flex flex-col items-center justify-center">
            <video ref={videoRef} className="w-full" />
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
