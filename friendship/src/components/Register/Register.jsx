import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import ErrorToast from "../ErrorToast/ErrorToast";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRepeatVisible, setisRepeatVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorVisible, setErrorVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const togglePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleRepeatPasswordVisibility = () => {
    setisRepeatVisible(!isRepeatVisible);
  };

  const ShowError = (message) => {
    setErrorMessage(message);
    setErrorVisible(true);
    setTimeout(() => {
      setErrorVisible(false);
    }, 5000);
  };

  const HandleRegister = async (event) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      ShowError("Passwords do not match");
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setErrorMessage(`${error.message}`);
        setErrorVisible(true);
        setTimeout(() => {
          setErrorVisible(false);
        }, 5000);
      });
  };

  return (
    <>
      <div className="login-form bg-gray-900 shadow-lg py-10 px-5 rounded-3xl border-blue-950 border-2 ">
        <h1 className="text-3xl text-white text-center my-5">Register</h1>
        <form>
          <div className="my-5 flex justify-center">
            <input
              type="text"
              placeholder="email"
              className="p-2 text-white bg-inherit rounded-lg border-blue-950 border-opacity-50 border-2 w-4/6"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="my-5 flex justify-center">
            <input
              type={isVisible ? "text" : "password"}
              placeholder="Password"
              className="p-2 text-white bg-inherit rounded-lg border-blue-950 border-opacity-50 border-2  w-1/2"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <button
              type="button"
              className="p-2 px-3 ml-2 rounded-xl border-blue-950 border-opacity-50 border-2 w-1/6"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon
                icon={isVisible ? faEyeSlash : faEye}
                className="text-white"
              />
            </button>
          </div>
          <div className="my-5 flex justify-center">
            <input
              type={isRepeatVisible ? "text" : "password"}
              placeholder="Password"
              className="p-2 text-white bg-inherit rounded-lg border-blue-950 border-opacity-50 border-2 w-1/2"
              onChange={(e) => {
                setRepeatPassword(e.target.value);
              }}
              value={repeatPassword}
            />
            <button
              type="button"
              className="p-2 px-3 ml-2 rounded-xl border-blue-950 border-opacity-50 border-2 w-1/6"
              onClick={toggleRepeatPasswordVisibility}
            >
              <FontAwesomeIcon
                icon={isRepeatVisible ? faEyeSlash : faEye}
                className="text-white"
              />
            </button>
          </div>
          <div className="my-5 flex justify-center">
            <button
              type="submit"
              className="bg-blue-950 text-white p-2 rounded-lg w-4/6 mx-auto"
              onClick={(e) => HandleRegister(e)}
            >
              Register
            </button>
          </div>
        </form>

        <hr/>
        <div className="my-5 flex justify-center">
          <Link
            to="/login"
            className="bg-blue-950 text-white p-2 rounded-lg w-4/6 mx-auto text-center"
          >
            Login
          </Link>
        </div>
      </div>

      {isErrorVisible && <ErrorToast errorMessage={errorMessage} />}
    </>
  );
}
