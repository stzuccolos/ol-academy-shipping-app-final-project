import { useEffect, useRef, useState } from "react";

const Stage1 = () => {
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");

  const descriptionRef = useRef(description);
  const weightRef = useRef(weight);

  useEffect(() => {
    descriptionRef.current = description;
  }, [description]);
  useEffect(() => {
    weightRef.current = weight;
  }, [weight]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orderInfo"));
    if (data) {
      setDescription(data.description);
      setWeight(data.weight);
    }

    return () => {
      const data = JSON.parse(localStorage.getItem("orderInfo"));
      const orderInfo = JSON.stringify({
        ...data,
        description: descriptionRef.current,
        weight: weightRef.current,
      });

      localStorage.setItem("orderInfo", orderInfo);
    };
  }, []);

  return (
    <div className="py-5">
      <textarea
        placeholder="Description"
        className="bg-inherit rounded-xl border-violet-900 border-2 p-2 my-5 text-white block"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="number"
        placeholder="Weight (KG)"
        className="bg-inherit rounded-xl border-violet-900 border-2 p-2 my-5 text-white block"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      ></input>
    </div>
  );
};
export default Stage1;
