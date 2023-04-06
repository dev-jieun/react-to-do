import React from "react";
import "./header.css";
import HeaderIcon from "./HeaderIcon";

export default function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <HeaderIcon iconId={"lightMode"}></HeaderIcon>
      </div>
      <div className="header_right">
        <HeaderIcon iconId={"homeIcon"}></HeaderIcon>
        <HeaderIcon iconId={"todayIcon"}></HeaderIcon>
        <HeaderIcon iconId={"anytimeIcon"}></HeaderIcon>
        <HeaderIcon iconId={"readingIcon"}></HeaderIcon>
      </div>
    </div>
  );
}
