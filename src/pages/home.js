import { useEffect, useState } from "react";
import Cronometro from "../components/molecules/cronometro/cronometro";
import ListTime from "../components/molecules/list-time/listTime";
import ListMark from "../components/molecules/list_mark/listMark";

export default function Home() {
  const [times, setTimes] = useState([]);
  const [timeOpen, setTimeOpen] = useState(null);
  const [marks, setMarks] = useState([]);

  const getTimes = async () => {
    const response = await fetch(`http://localhost:4000/api/time/alltime`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response_data = await response.json();
    setTimes(response_data);
  };

  const getMarksByTime = async () => {
    const response = await fetch(
      `http://localhost:4000/api/time/marks/` + timeOpen,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response_data = await response.json();
    setMarks(response_data);
  };

  useEffect(() => {
    getTimes();
  }, []);

  useEffect(() => {

    if (timeOpen !== null) {
      getMarksByTime();
      document.documentElement.style.overflowY = "hidden";
    } else document.documentElement.style.overflowY = "scroll";
  }, [timeOpen]);

  return (
    <div>
      <Cronometro getTimes={() => getTimes()} />
      <ListTime times={times} openMark={(id) => setTimeOpen(id)} />
      {timeOpen != null ? (
        <ListMark marks={marks} close={() => setTimeOpen(null)} />
      ) : null}
    </div>
  );
}
