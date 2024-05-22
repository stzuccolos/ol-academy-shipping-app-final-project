import { useState } from "react";
import "./Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faEye,
  faEyeSlash,
  faSpinner,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import ErrorToast from "./ErrorToast";

export default function Register() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRepeatVisible, setisRepeatVisible] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [isemailValid, setEmailValid] = useState(false);
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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailValid(email.includes("@") && email.includes(".com"));
  };

  const HandleRegister = async (event) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      setErrorMessage("Passwords do not match");
      setErrorVisible(true);
      setTimeout(() => {
        setErrorVisible(false);
      }, 5000);
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
        <form className="flex-col">
          <div className="my-5 text-center">
            <input
              type="text"
              placeholder="email"
              className="p-2 text-white bg-inherit rounded-lg border-blue-950 border-opacity-50 border-2 w-2/4"
              onChange={(e) => {
                handleEmailChange(e);
              }}
              value={email}
            />
            <button
              disabled
              type="button"
              className={
                isemailValid
                  ? "bg-green-600 p-2 px-3 ml-2 rounded-xl border-blue-950 border-opacity-50 border-2 w-1/6"
                  : "bg-red-600 p-2 px-3 ml-2 rounded-xl border-blue-950 border-opacity-50 border-2 w-1/6"
              }
            >
              {emailLoading ? (
                <FontAwesomeIcon
                  icon={emailLoading ? faSpinner : faEye}
                  className="text-white animate-spin"
                />
              ) : (
                <FontAwesomeIcon
                  icon={isemailValid ? faCheck : faX}
                  className="text-white"
                />
              )}
            </button>
          </div>
          <div className="my-5 text-center">
            <input
              type={isVisible ? "text" : "password"}
              placeholder="Password"
              className="p-2 text-white bg-inherit rounded-lg border-blue-950 border-opacity-50 border-2  w-2/4"
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
          <div className="my-5 text-center">
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
          <div className="my-5 text-center">
            <button
              type="submit"
              className="bg-blue-950 text-white p-2 rounded-lg w-4/6 mx-auto"
              onClick={(e) => HandleRegister(e)}
            >
              Register
            </button>
          </div>
        </form>
      </div>

      {isErrorVisible && (
        <ErrorToast errorMessage={errorMessage} />
      )}
    </>
  );
}
