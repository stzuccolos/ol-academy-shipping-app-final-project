import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/Navbar";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
    </>
  );
}

export default App;
