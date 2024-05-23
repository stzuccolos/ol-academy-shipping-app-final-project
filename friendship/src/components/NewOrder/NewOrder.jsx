import { useEffect, createContext, useState } from "react";
import OrderStageSwich from "./OrderStageSwitch";
import { db, auth } from "../Firebase";
import { ref, set, push, child, update } from "firebase/database";
import { useNavigate } from "react-router-dom";

const OrderContext = createContext();
export default function NewOrder() {
  const [order, setOrder] = useState({});
  const [stage, setStage] = useState(1);

  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    const userId = auth.currentUser.uid;
    const ordersRef = ref(db, `/orders/${userId}`);

    const newOrderRef = push(ordersRef);

    set(newOrderRef, order)
      .then(() => {
        console.log("Order submitted");
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
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 bg-violet-950 border-blue-950 p-10 border-4 rounded-xl shadow-2xl ">
      <h1 className="text-4xl text-white text-center">New Order</h1>
      <form onSubmit={HandleSubmit}>
        <div className="flex justify-center">
          <OrderContext.Provider value={{ order, setOrder, stage, setStage }}>
            <OrderStageSwich />
          </OrderContext.Provider>
        </div>
      </form>
    </div>
  );
}

export { OrderContext };
