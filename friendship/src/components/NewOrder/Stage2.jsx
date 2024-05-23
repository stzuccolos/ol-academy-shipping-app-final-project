import { useEffect, useState, useRef } from "react";
import ports, { getAvailableRoutes } from "../Ports";

const Stage2 = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [routes, setRoutes] = useState([]);

  const fromRef = useRef(from);
  const toRef = useRef(to);

  useEffect(() => {
    fromRef.current = from;
    setRoutes(getAvailableRoutes(from));
  }, [from]);
  
  useEffect(() => {
    toRef.current = to;
  }, [to]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orderInfo"));
    if (data) {
      setFrom(data.from);
      setTo(data.to);
    }

    return () => {
      const data = JSON.parse(localStorage.getItem("orderInfo"));
      const newData = JSON.stringify({
        ...data,
        from: fromRef.current,
        to: toRef.current,
      });
      localStorage.setItem("orderInfo", newData);
    };
  }, []);

  return (
    <div className="py-5">
      <span className="text-white">From:</span>
      <select
        className="bg-inherit rounded-xl border-violet-900 border-2 p-2 mb-5 text-white block"
        onChange={(e) => setFrom(e.target.value)}
        value={from}
      >
        {ports.map((port, idx) => (
          <option key={idx} value={port.name} className="text-black">
            {port.name}
          </option>
        ))}
      </select>

      {from === "" ? (
        <span>Please select</span>
      ) : (
        <>
          <span className="text-white">To:</span>
          <select
            className="bg-inherit rounded-xl border-violet-900 border-2 p-2 mb-5 text-white block"
            onChange={(e) => setTo(e.target.value)}
            value={to}
          >
            {routes.map((route, idx) => (
              <option key={idx} value={route.name} className="text-black">
                {route}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};
export default Stage2;
