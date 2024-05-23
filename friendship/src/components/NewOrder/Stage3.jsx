import { useEffect, useRef, useState } from "react";

const Stage3 = () => {
  const [departureDate, setDepartureDate] = useState("");

  const departureRef = useRef(departureDate);

  useEffect(() => {
    departureRef.current = departureDate;
  }, [departureDate]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orderInfo"));
    if (data) {
      setDepartureDate(data.departureDate);
    }

    return () => {
      const data = JSON.parse(localStorage.getItem("orderInfo"));
      const newData = JSON.stringify({
        ...data,
        departureDate: departureRef.current,
      });
      localStorage.setItem("orderInfo", newData);
    };
  }, []);

  return (
    <div className="py-5">
      <span className="text-white">Departure Date:</span>
      <input
        type="date"
        placeholder="Description"
        className="bg-inherit rounded-xl border-violet-900 border-2 p-2 mb-5 mt-2 text-white block"
        min={new Date().toISOString().split("T")[0]}
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
      ></input>

    </div>
  );
};
export default Stage3;
