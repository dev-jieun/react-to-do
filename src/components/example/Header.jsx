import React from "react";
import "./header.css";
import MenuItem from "./MenuItem";

export default function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuItem iconId={"lightMode"}></MenuItem>
      </div>
      <div className="header_right">
        <span className="icon_wrap">
          <MenuItem iconId={"homeIcon"}></MenuItem>
        </span>
        <span className="icon_wrap">
          <MenuItem iconId={"todayIcon"}></MenuItem>
        </span>
        <span className="icon_wrap">
          <MenuItem iconId={"anytimeIcon"}></MenuItem>
        </span>
        <span className="icon_wrap">
          <MenuItem iconId={"readingIcon"}></MenuItem>
        </span>
      </div>
    </div>
  );
}
