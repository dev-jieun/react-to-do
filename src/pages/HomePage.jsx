import React from "react";
import List from "../components/List";
import "./home-page.css";
import TodayPage from "./TodayPage";

export default function HomePage() {
  return (
    <div className="home">
      <h3 className="home_title">Wishing you a wonderful day!</h3>
      <div className="home_contents">
        <TodayPage></TodayPage>
      </div>
    </div>
  );
}
