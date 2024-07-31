import React from "react";
import Home from "./img/header.jpg";
import Border from "./img/overlay-top.png";
import "./home.css";

export default function home() {
  const alt = "this is img";
  return (
    <>
    <div className="imgTop">
      <img src={Home} alt={alt} className="homeImg" />
      <img src={Border} alt="border" className="homeBorderImg" />
      </div>
    </>
  );
}
