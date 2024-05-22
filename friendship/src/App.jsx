import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </>
  );
}

export default App;
