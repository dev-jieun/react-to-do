import React from "react";
import List from "../components/List";
import MenuItem from "../components/MenuItem";

export default function TodayPage() {
  const todayItems = [
    {
      key: "1",
      contents: "Call Mom and Dad",
      ischecked: false,
    },
    {
      key: "2",
      contents: "Finish expense report",
      ischecked: false,
    },
    {
      key: "3",
      contents: "Send out invitations",
      ischecked: false,
    },
  ];

  return (
    <div className="today_container">
      <div className="list_wrap">
        <div className="list_title">
          <MenuItem iconId={"todayIcon"}></MenuItem>
        </div>
        <List items={todayItems}></List>
      </div>
    </div>
  );
}
