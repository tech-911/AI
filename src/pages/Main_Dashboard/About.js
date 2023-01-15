import React from "react";
import "./about.scss";
import { BsFillPersonFill } from "react-icons/bs";
import { FcProcess } from "react-icons/fc";
import { MdFaceRetouchingOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const About = () => {
  const Navigate = useNavigate();
  return (
    <div className="flex flex-col h-full about_wrapper">
      <div className="test1_section1 mt-20 flex items-center justify-between mx-[1.5rem]">
        <div className="enroll flex flex-col items-center w-[30%]">
          <BsFillPersonFill className="text-[50px] text-[#082a4d]" />
          <p
            onClick={() => {
              Navigate("/dashboard/test2");
            }}
            className="enroll_text mt-2 text-[#082a4d] cursor-pointer font-bold"
          >
            Enroll Face
          </p>
        </div>
        <div className="train flex flex-col items-center w-[30%]">
          <FcProcess className="text-[50px] text-[#082a4d]" />
          <p className="enroll_text mt-2 text-[#082a4d] cursor-pointer font-bold">
            Train Model
          </p>
        </div>
        <div className="train flex flex-col items-center w-[30%]">
          <MdFaceRetouchingOff className="text-[50px] text-[#00ff00]" />
          <p className="enroll_text mt-2 text-[#082a4d] cursor-pointer font-bold">
            Face Access
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
