import React, { Component } from "react";
import "./monitor.scss";
import { data } from "./graphData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

class Monitor extends Component {
  render() {
    return (
      <div className="flex flex-col h-[100%] w-[100%]">
        <div className="monitor_graph h-[70vh] mx-[2.5rem] my-16 pr-10 py-10">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={200}
              height={100}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="hit_and_run"
                stroke="#8884d8"
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="car_theft"
                stroke="#82ca9d"
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
export default Monitor;
