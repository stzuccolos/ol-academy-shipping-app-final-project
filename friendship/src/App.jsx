import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import NewOrder from "./components/NewOrder/NewOrder";
import Orders from "./components/Orders/Orders";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="navbar-space">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<NewOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
