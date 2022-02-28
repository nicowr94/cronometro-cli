import "./watch.scss";

export default function Watch({ time }) {
  const initHour = () => {
    if (time.h === 0) return "";
    else return <span>{time.h >= 10 ? time.h : "0" + time.h}</span>;
  };
  return (
    <div className="a-watch">
      {initHour()}
      <span>{time.m >= 10 ? time.m : "0" + time.m}</span>:
      <span>{time.s >= 10 ? time.s : "0" + time.s}</span>:
      <span>{time.ms >= 10 ? time.ms : "0" + time.ms}</span>
    </div>
  );
}
