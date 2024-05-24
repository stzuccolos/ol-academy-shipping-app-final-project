import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Thingamajig({ text, icon }) {
  return (
    <div className="p-10 rounded-xl bg-white border-2 border-blue-900 w-1/6">
      <h1 className="text-center">
        <FontAwesomeIcon icon={icon} />
      </h1>
      <hr />
      <p className="text-center">{text}</p>
    </div>
  );
}
