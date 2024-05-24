export default function ProgressBarIndicator({isActive}) {
  return (
    <div
      className={`w-1/3 mx-2 h-1 rounded-full shadow-2xl shadow-inherit ${
        isActive ? "bg-green-500" : "bg-white"
      }`}
    ></div>
  );
}
