import React from "react";
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
          </div>
        </div>
      </div>
    </>
  );
}
