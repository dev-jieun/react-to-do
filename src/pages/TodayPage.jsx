import React from "react";
import List from "../components/List";

export default function TodayPage() {
  const todayItems = [
    {
      contents: "Call Mom and Dad",
      ischecked: false,
    },
    {
      contents: "Finish expense report",
      ischecked: false,
    },
    {
      contents: "Send out invitations",
      ischecked: false,
    },
  ];

  return (
    <div class="today_container">
      <List listName={`Today`} items={todayItems}></List>
    </div>
  );
}
