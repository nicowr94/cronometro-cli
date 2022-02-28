import React from "react";
import TimeAgo from "timeago-react";
import "./cardTime.scss";

export default function cardTime({
  id,
  index,
  start,
  end,
  duration,
  openMark,
}) {
  const startDate = new Date(start)
    .toLocaleString()
    .replace(/T/, " ")
    .replace(/\..+/, "");
  const endDate = new Date(end)
    .toLocaleString()
    .replace(/T/, " ")
    .replace(/\..+/, "");
  return (
    <div className="a-card-time__container">
      <div className="a-card-time__container__description">
        <div className="a-card-time__container__description__about">
          <p>{index}</p>
          <div className="a-card-time__container__description__about__timeago">
            <TimeAgo datetime={start} locale="ES" />{" "}
          </div>
        </div>
        <div className="a-card-time__container__description__dates">
          <p className="a-card-time__container__description">{startDate}</p>
          <p className="a-card-time__container__description">{endDate}</p>
        </div>
      </div>
      <div className="a-card-time__container__options">
        <p>{duration} seg</p>
        <p
          className="a-card-time__container__options__ver-mas"
          onClick={() => openMark(id)}
        >
          ver más
        </p>
      </div>
    </div>
  );
}
