import React from "react";
import CardMark from "../../atoms/card_mark/cardMark";
import "./listMark.scss";

export default function listMark({ marks, close }) {
  return (
    <div className="m-list_mark">
      <div className="m-list_mark__container">
        <div className="m-list_mark__container__header">
          <p className="m-list_mark__container__header__title">
            MARCAS DEL CRONOMETRO
          </p>
          <span
            className="material-icons outlined m-list_mark__container__header__close"
            onClick={() => close()}
          >
            close
          </span>
        </div>
        <div>
          {marks.length > 0 &&
            marks.map((m, index) => {
              return (
                <CardMark
                  key={"cardMark-" + index}
                  index={index + 1}
                  start={m.start_date}
                  end={m.end_date}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
