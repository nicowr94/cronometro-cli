import React from "react";
import CardTime from "../../atoms/card_time/cardTime";
import "./listTime.scss";

export default function listTime({ times, openMark }) {

  return (
    <div className="m-list-time__container">
      <h3>Lista de marcaciones</h3>

      {times.length > 0 &&
        times.map((t, index) => {
          return (
            <CardTime
              key={"cardTime-" + index}
              id={t.id}
              start={t.start_date}
              end={t.end_date}
              duration={String(t.duration).replace(".", ":")}
              index={index + 1}
              openMark={(id) => openMark(id)}
            />
          );
        })}
    </div>
  );
}
