import { useEffect, useContext, useState } from "react";
import { OrderContext } from "./NewOrder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Stage3 = () => {
  const [departureDate, setDepartureDate] = useState("");
  const { order, setOrder, setStage } = useContext(OrderContext);

  useEffect(() => {
    if (order) {
      setDepartureDate(order.departureDate ?? "");
    }
  }, [order]);

  const HandleBack = (e) => {
    e.preventDefault();
    setOrder({ ...order, departureDate });
    setStage(2);
  };

  const HandleSubmit = () => {
    setOrder({ ...order, departureDate });
  };

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

      <div className="flex justify-between">
        <button
          type="button"
          className="bg-blue-950 border-violet-900 border-2 my-5 p-2 text-white rounded-xl w-1/3"
          onClick={(e) => HandleBack(e)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          type="submit"
          className="bg-blue-950 border-violet-900 border-2 my-5 p-2 text-white rounded-xl w-1/3"
          onClick={() => HandleSubmit()}
        >
          <FontAwesomeIcon icon={faFloppyDisk} />
        </button>
      </div>
    </div>
  );
};
export default Stage3;
