import React from "react";
import Item from "./Item";

export default function List({ listName, items }) {
  const listItems = items.map((item) => {
    <Item contents={item.text} isChecked={items.checked}></Item>;
  });

  return (
    <div>
      <span>{listName}</span>
      <div className="list_items">{listItems}</div>
    </div>
  );
}
