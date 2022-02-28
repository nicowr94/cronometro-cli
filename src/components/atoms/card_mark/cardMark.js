import React from "react";
import "./cardMark.scss";

export default function cardMark({ index, start, end }) {
  const startDate = new Date(start)
    .toLocaleString()
    .replace(/T/, " ")
    .replace(/\..+/, "");
  const endDate = new Date(end)
    .toLocaleString()
    .replace(/T/, " ")
    .replace(/\..+/, "");
  return (
    <div className="a-card_mark">
      <p className="a-card_mark__index">{index}</p>
      <p>{startDate}</p>
      <p>-</p>
      <p>{endDate}</p>
    </div>
  );
}
