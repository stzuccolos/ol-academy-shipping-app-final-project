/* eslint-disable react/prop-types */
import { useContext } from "react";
import { OrderContext } from "./NewOrder";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";

const OrderStageSwitch = () => {
  const { stage } = useContext(OrderContext);

  switch (stage) {
    case 1:
      return <Stage1 />;
    case 2:
      return <Stage2 />;
    case 3:
      return <Stage3 />;
    default:
      return <Stage1 />;
  }
};

export default OrderStageSwitch;
