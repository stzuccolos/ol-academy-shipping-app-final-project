import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { OrderContext } from "./NewOrder";

const Stage1 = () => {
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState(0);
  const { order, setOrder, setStage } = useContext(OrderContext);

  useEffect(() => {
    if (order) {
      setDescription(order.description ?? "");
      setWeight(order.weight ?? 0);
    }
  }, [order]);

  const HandleNext = (e) => {
    e.preventDefault();
    setOrder({ ...order, description, weight });
    setStage(2);
  };

  return (
    <div className="py-5">
      <span className="text-white">Description:</span>
      <textarea
        className="bg-inherit rounded-xl border-violet-900 border-2 p-2 mb-5 text-white block"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <span className="text-white">Weight, KG:</span>
      <input
        type="number"
        className="bg-inherit rounded-xl border-violet-900 border-2 p-2 mb-5 text-white block"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      ></input>
      <button
        type="button"
        className="bg-blue-950 border-violet-900 border-2 my-5 p-2 text-white rounded-xl w-full "
        onClick={HandleNext}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};
export default Stage1;
