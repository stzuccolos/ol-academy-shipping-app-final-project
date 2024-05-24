import { useEffect, createContext, useState } from "react";
import OrderStageSwitch from "./OrderStageSwitch";
import { db, auth } from "../Firebase";
import { ref, set, push } from "firebase/database";
import { useNavigate } from "react-router-dom";
import ProgressBarIndicator from "./ProgressBarIndicator";

const OrderContext = createContext();
export default function NewOrder() {
  const [order, setOrder] = useState({});
  const [stage, setStage] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    const userId = auth.currentUser.uid;
    const ordersRef = ref(db, `/orders/${userId}`);

    const newOrderRef = push(ordersRef);

    set(newOrderRef, order)
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => {
          navigate("/orders");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error submitting order: ", error);
      });
  };

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
    }
    return () => {};
  }, []);

  return (
    <>
      <div
        hidden={isSubmitted}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 bg-violet-950 border-blue-950 p-10 border-4 rounded-xl shadow-2xl "
      >
        <h1 className="text-4xl text-white text-center">New Order</h1>
        <form onSubmit={HandleSubmit}>
          <div className="flex justify-center">
            <OrderContext.Provider value={{ order, setOrder, stage, setStage }}>
              <OrderStageSwitch />
            </OrderContext.Provider>
          </div>
        </form>

        <div className="m-4 flex justify-center">
          <ProgressBarIndicator isActive={stage >= 1} />
          <ProgressBarIndicator isActive={stage >= 2} />
          <ProgressBarIndicator isActive={stage >= 3} />
        </div>
      </div>

      <div
        hidden={!isSubmitted}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        <h1 className="text-4xl text-white text-center">Order Submitted</h1>
        <h1 className="text-xl text-white text-center">Redirect to orders in 3 seconds</h1>
      </div>
    </>
  );
}

export { OrderContext };
