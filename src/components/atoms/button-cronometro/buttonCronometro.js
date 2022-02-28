import React from "react";
import "./buttonCronometro.scss";

export default function ButtonCronometro({ status, start, stop, reset }) {
  return (
    <div className="a-button-cronometro">
      {status === 0 ? (
        <button
          className="a-button-cronometro__button button--start"
          onClick={start}
        >
          Start
        </button>
      ) : (
        ""
      )}

      {status === 1 ? (
        <>
          <button
            className="a-button-cronometro__button button--pause"
            onClick={stop}
          >
            Pause
          </button>
          <button
            className="a-button-cronometro__button button--stop"
            onClick={reset}
          >
            Stop
          </button>
        </>
      ) : (
        ""
      )}

      {status === 2 ? (
        <>
          <button
            className="a-button-cronometro__button button--continue"
            onClick={start}
          >
            Continue
          </button>
          <button
            className="a-button-cronometro__button button--stop"
            onClick={reset}
          >
            Stop
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
