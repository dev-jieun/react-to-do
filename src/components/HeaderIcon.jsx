import React from "react";
import { FcHome, FcLikePlaceholder, FcCloseUpMode, FcReading } from "react-icons/fc";
import { BsSun } from "react-icons/bs";

export default function HeaderIcon({ iconId }) {
  switch (iconId) {
    case "lightMode":
      return <BsSun className="header_icon dark_mode_icon" />;
    case "homeIcon":
      return (
        <span class="icon_wrap">
          <FcHome className="header_icon"></FcHome>
          <label>Home</label>
        </span>
      );
    case "todayIcon":
      return (
        <span class="icon_wrap">
          <FcLikePlaceholder className="header_icon"></FcLikePlaceholder>
          <label>Today</label>
        </span>
      );
    case "anytimeIcon":
      return (
        <span class="icon_wrap">
          <FcCloseUpMode className="header_icon"></FcCloseUpMode>
          <label>Anytime</label>
        </span>
      );
    case "readingIcon":
      return (
        <span className="icon_wrap">
          <FcReading className="header_icon"></FcReading>
          <label>Reading</label>
        </span>
      );
    default:
      return <></>;
  }
}
