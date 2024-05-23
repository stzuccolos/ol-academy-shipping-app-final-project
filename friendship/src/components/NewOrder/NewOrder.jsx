import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import OrderStageSwich from "./OrderStageSwitch";
import { db, auth } from "../Firebase";
import { ref, set, push, child, update } from "firebase/database";

export default function NewOrder() {
  const [stage, setStage] = useState(1);

  const HandlePrevious = (e) => {
    e.preventDefault();
    setStage(stage - 1);
  };

  const HandleNext = (e) => {
    e.preventDefault();
    setStage(stage + 1);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("orderInfo"));
    const order = {
      ...data,
      uid: auth.currentUser.uid,
    };

    let updates = {};
    updates[`/orders/`] = order;

    console.log(updates);
    push(ref(db), updates);
    console.log("Order submitted");

  };

  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 bg-violet-950 border-blue-950 p-10 border-4 rounded-xl shadow-2xl ">
      <h1 className="text-4xl text-white text-center">New Order</h1>
      <form>
        <div className="flex justify-center">
          <OrderStageSwich stage={stage} setStage={setStage} />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-950 border-violet-900 border-2 my-5 p-2 text-white rounded-xl w-1/3 disabled:opacity-50"
            disabled={stage === 1}
            onClick={HandlePrevious}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {stage === 3 ? (
            <button
              type="submit"
              className="bg-blue-950 border-violet-900 border-2 my-5 p-2 text-white rounded-xl w-1/3"
              onClick={HandleSubmit}
            >
              Submit
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-950 border-violet-900 border-2 my-5 p-2 text-white rounded-xl w-1/3 disabled:opacity-50"
              disabled={stage === 3}
              onClick={HandleNext}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
