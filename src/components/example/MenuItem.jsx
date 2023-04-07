import React from "react";
import { FcHome, FcLikePlaceholder, FcCloseUpMode, FcReading } from "react-icons/fc";
import { BsSun } from "react-icons/bs";

export default function MenuItem({ iconId }) {
  switch (iconId) {
    case "lightMode":
      return <BsSun className="header_icon dark_mode_icon" />;
    case "homeIcon":
      return (
        <>
          <FcHome className="header_icon"></FcHome>
          <label>Home</label>
        </>
      );
    case "todayIcon":
      return (
        <>
          <FcLikePlaceholder className="header_icon"></FcLikePlaceholder>
          <label>Today</label>
        </>
      );
    case "anytimeIcon":
      return (
        <>
          <FcCloseUpMode className="header_icon"></FcCloseUpMode>
          <label>Anytime</label>
        </>
      );
    case "readingIcon":
      return (
        <>
          <FcReading className="header_icon"></FcReading>
          <label>Reading</label>
        </>
      );
    default:
      return <></>;
  }
}
