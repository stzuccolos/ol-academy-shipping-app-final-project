import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Register/Register";
import NavBar from "./components/NavBar/Navbar";
import Login from "./components/Login/Login";
import "./App.css";

function App() {
  return (
    <>
      <NavBar/>

      <div className="navbar-space">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
