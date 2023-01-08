import React from "react";
import { data } from "./data";
import { GiCheckMark } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import "./logs.scss";
const Logs = () => {
  return (
    <div className="logs_wrapper overflow-x-hidden">
      <div className="bg-white rounded-md m-10 logs_widget relative overflow-x-hidden">
        <p className="text-[#2F81CD] text-[20px] font-[inter] font-bold mb-6 text-center absolute top-4 left-6">
          Logs
        </p>
        <div className="logs_table mx-16 my-16 overflow-x-scroll">
          <div className="grid gap-3 mb-6 pb-8 logs_title border-b-2 border-[#6c99c411]">
            <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold justify-self-start">
              S/N
            </p>
            <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold col-span-1">
              Bad Driving
            </p>

            <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold col-span-1">
              Hit and Run
            </p>
            <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold col-span-1">
              Car Theft
            </p>
            <p className="text-[#2F81CD] text-[16px] font-[inter] font-bold col-span-2">
              Vehicle Number
            </p>
          </div>
          <div className="logs_content">
            {data.map((value) => {
              return (
                <div
                  key={value.id}
                  className="grid gap-3 mb-4 logs_item1 border-b-2 border-[#6c99c411] pb-4"
                >
                  <p className="justify-self-start text-[#7e7d7d]">
                    {value.id}
                  </p>
                  <p className="col-span-1 text-[#7e7d7d]">
                    {value.bad_driving}
                  </p>
                  <p className="col-span-1 text-[#7e7d7d]">
                    {value.hit_and_run}
                  </p>
                  <p className="col-span-1 text-[#7e7d7d]">
                    {value.car_theft ? (
                      <GiCheckMark className="text-[#48fc48]" />
                    ) : (
                      <ImCancelCircle className="text-[#e64545]" />
                    )}
                  </p>
                  <p className="col-span-2 text-[#7e7d7d]">{value.plate_no}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;
