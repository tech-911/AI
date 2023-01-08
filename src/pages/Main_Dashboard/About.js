import React from "react";
import "./about.scss";
const About = () => {
  return (
    <div className="flex flex-col justify-between h-full about_wrapper">
      <div className="border-b-2 border-b-[#002956] flex flex-col items-center py-4">
        <p className="text-[22px] font-bold text-[white] text-center px-10">
          Vehicle Data Logging System
        </p>
        {/* <p className="text-[20px] font-semibold text-[white]">(IS4RM)</p> */}
      </div>
      <div className="bg-[white] rounded-[8px] py-6 px-8 shadow-lg w-[90%] self-center about_resContent overflow-y-hidden h-[600px]">
        <h1 className="border-b-2 border-b-[black] w-fit text-[15px] font-bold mb-4 mt-4 text-[black]">
          Abstract:
        </h1>
        <div className="h-[80%] about_restext mb-12">
          <p className="text-[15px] text-justify px-2">
            The automotive industry has experienced spectacular expansion in the
            last decade, with an increase in the number of cars in metropolitan
            cities. It is vital to maintain track of automobiles based on their
            plates number in order to properly manage vehicular traffic. This
            project presents a methodology for tracking vehicle movement based
            on the vehicle's plates number with data logging model that serves
            as a centralized database structure for vehicles identification,
            using image processing techniques and IoT mechanism for detection
            and recognition accuracy. The goal of this project work is to use
            artificial intelligence, computer vision (image processing), laser
            scanning technology and convolutional neural networks (CNN) to build
            an Intelligent Plate Number Recognition(IPNR) System. This problem
            entails mathematical principles and algorithms, which ensure a
            variety of techniques for completing the product's steps. The image
            is captured with any camera capable of producing high-quality
            images. This work focuses on plate number localization utilizing the
            contours tracing approach, as well as edge identification and
            sharpening using optical character recognition algorithm based on
            OpenCV libraries. In order to assess the accuracy of the proposed
            video processing algorithm an instrumented vehicle was equipped with
            a high precision GPS and GSM module. This study uses a variety of
            algorithms in each area, from plate number detection, to character
            recognition, to improve the system's performance to the maximum
            extent possible with the least amount of effort and processing
            resources. The results of these experiments highlight the
            versatility of vehicle in the metropolitan cities combined with
            video processing technique and image processing for data logging and
            decision making. Also results of data set used to train the
            evaluated models, as well as persistence in recognition across
            frames in video data was shown. Finally, a graphical user interface
            was developed for data logging to ensure continuity in the training
            of the model and for monitoring and control of the system. Keywords:
            Artificial Intelligence, Computer Vision, Data Logging Model,
            Metropolitan City, Vehicle Movement Monitoring.
          </p>
        </div>
      </div>
      <div className="text-center w-full bg-[#01336A] pt-6 pb-6 flex flex-row items-center justify-center border-2 border-[#034890] text-[#b1b1b1]">
        © Developed by Samuel Adeniyi, Mechatronics Engineer
      </div>
    </div>
  );
};

export default About;
