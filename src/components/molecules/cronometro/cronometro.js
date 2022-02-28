import { useState } from "react";
import Watch from "../../atoms/watch/watch";
import ButtonCronometro from "../../atoms/button-cronometro/buttonCronometro";
import "./cronometro.scss";

let listDate = [];
export default function Cronometro({ getTimes }) {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  //Create array time
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
    setStartDate(Date.now());
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
    const mark = { start_date: startDate, end_date: Date.now() };
    listDate = [...listDate, mark];
    setStartDate(null);
    setEndDate(null);
  };

  const reset = async () => {
    setEndDate(Date.now());
    postTimes();
    clearInterval(interv);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setStatus(0);
    listDate = [];
    setStartDate(null);
    setEndDate(null);
  };

  const postTimes = async () => {
    if (status !== 2 && start !== null) {
      const mark = { start_date: startDate, end_date: Date.now() };
      listDate = [...listDate, mark];
    }
 
    const data = {
      start_date: listDate[0].start_date,
      end_date: listDate[listDate.length - 1].end_date,
      duration: time,
      marks: listDate,
    };

    const response = await fetch(`http://localhost:4000/api/time`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    getTimes();

    // const response_data = await response.json();
    // console.table(response_data);

    // if (response.ok === true) {
    //   // Router.replace("/login");
    //   //   history.replace(lastPath);
    // } else setMsgError(true);
  };

  return (
    <div className="m-cronometro">
      <Watch time={time} />
      <ButtonCronometro
        status={status}
        start={start}
        stop={stop}
        reset={reset}
      />
    </div>
  );
}
