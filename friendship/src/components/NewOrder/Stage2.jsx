import { useEffect, useState, useRef, useContext } from "react";
import { OrderContext } from "./NewOrder";
import ports, { getAvailableRoutes } from "../Ports";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Stage2 = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [routes, setRoutes] = useState([]);
  const { order, setOrder, setStage } = useContext(OrderContext);

  useEffect(() => {
    if (order) {
      setFrom(order.from ?? "");
      setTo(order.to ?? "");
    }
  }, [order]);

  useEffect(() => {
    setRoutes(getAvailableRoutes(from));
  }, [from]);

  const HandleNav = (direction, e) => {
    e.preventDefault();
    setOrder({ ...order, from, to });
    if (direction === "next") {
      setStage(3);
    }
    if (direction === "prev") {
      setStage(1);
    }
  };
  return (
    <>
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

        <div className="flex justify-between">
          <button
            type="button"
            className="bg-blue-950 border-violet-900 border-2 my-5 p-2 text-white rounded-xl w-1/3"
            onClick={(e) => HandleNav("prev", e)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            type="button"
            className="bg-blue-950 border-violet-900 border-2 my-5 p-2 text-white rounded-xl w-1/3"
            onClick={(e) => HandleNav("next", e)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </>
  );
};
export default Stage2;
