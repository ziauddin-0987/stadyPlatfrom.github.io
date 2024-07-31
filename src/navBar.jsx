import React from "react";
import ReactDOM from "react-dom/client";
import Icon from "@ant-design/icons";

import "./App.css";

export default function navBar() {
  return (
    <>
      <div className="header">
        <div className="headerIn">
          <div className="headerText">
            <h1>Education</h1>
          </div>
        </div>
        <ul className="headerUlList">
          <li>Home</li>
          <li>About</li>
          <li>Severvice</li>
          <li>Courses</li>
          <li>contract</li>
        </ul>
        <div className="butTop">
          <div className="btn">
            <button className="headerSingInBtn">singin</button>
            {/* <MenuOutlined className="menuOut" /> */}
            {/* <Icon /> */}
          </div>
        </div>
      </div>
    </>
  );
}
