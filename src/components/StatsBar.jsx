import React, { useEffect, useState } from "react";
import "../css/statsbar.css";

const stats = [
  { num: 10, suffix: "+", label: "Projects Completed" },
  { num: 10, suffix: "+", label: "Happy Clients" },
  { num: 5, suffix: "+", label: "Years Experience" },
  { num: 24, suffix: "/7", label: "Technical Support" },
];

const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const startedRef = React.useRef(false);

  useEffect(() => {
    if (startedRef.current) return; // 🚫 prevents restart
    startedRef.current = true;

    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h2>
      {count}
      {suffix}
    </h2>
  );
};

const StatsBar = () => {
  return (
    <section className="stats-bar">
      {stats.map((item, index) => (
        <div className="stat-item animate" key={index}>
          <Counter end={item.num} suffix={item.suffix} />
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsBar;