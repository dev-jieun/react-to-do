import React from "react";
import Item from "./Item";
import "./list.css";

export default function List({ items }) {
  const listItems = items.map((item) => {
    console.dir(item);
    return <Item key={item.key} contents={item.contents} isChecked={items.checked}></Item>;
  });

  console.dir(listItems);

  return <div className="list_items">{listItems}</div>;
}
