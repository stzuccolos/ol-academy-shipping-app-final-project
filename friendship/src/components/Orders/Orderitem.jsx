export default function Orderitem({ order }) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Order Details</h2>
        <span className="text-gray-500 text-sm">
          Departure Date: {order.departureDate}
        </span>
      </div>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Description:</span> {order.description}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">From:</span> {order.from}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">To:</span> {order.to}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Weight:</span> {order.weight}
      </p>
    </div>
  );
}
