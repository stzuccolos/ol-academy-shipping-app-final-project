import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, child, get } from "firebase/database";
import { db, auth } from "../Firebase";
import Orderitem from "./Orderitem";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const ordersRef = ref(db, `/orders/${auth.currentUser.uid}`);
    const ordersSnapshot = await get(ordersRef);
    if (ordersSnapshot.exists()) {
      const orders = ordersSnapshot.val();
      setOrders(Object.values(orders));
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
      return;
    }
    getOrders();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-10 text-white text-center ">Your Orders</h1>
      {orders.length === 0 && (
        <h2 className="text-lg text-gray-600 mb-8">No orders found</h2>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {orders.map((order, index) => (
          <Orderitem key={index} order={order} />
        ))}
      </div>
    </div>
  );
}
