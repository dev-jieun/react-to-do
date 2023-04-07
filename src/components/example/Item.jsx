import React from "react";

export default function Item({ contents, isChecked }) {
  console.dir(contents);
  console.log(isChecked);

  return (
    <div className="item">
      <input type="checkbox" name="{`name_${contents}`}" id="{`name_${contents}`}" checked={isChecked} />
      <span className="contents">{contents}</span>
    </div>
  );
}
