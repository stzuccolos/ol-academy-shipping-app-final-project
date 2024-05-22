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

export default function Register() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRepeatVisible, setisRepeatVisible] = useState(false);
  const [usernameLoading, setUsernameLoading] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const togglePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleRepeatPasswordVisibility = () => {
    setisRepeatVisible(!isRepeatVisible);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setIsUsernameValid(username.length > 5);
  };

  const HandleRegister = async (event) => {
    event.preventDefault();

    await createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
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
              placeholder="Username"
              className="p-2 text-white bg-inherit rounded-lg border-blue-950 border-opacity-50 border-2 w-2/4"
              onChange={(e) => {
                handleUsernameChange(e);
              }}
              value={username}
            />
            <button
              disabled
              type="button"
              className={
                isUsernameValid
                  ? "bg-green-600 p-2 px-3 ml-2 rounded-xl border-blue-950 border-opacity-50 border-2 w-1/6"
                  : "bg-red-600 p-2 px-3 ml-2 rounded-xl border-blue-950 border-opacity-50 border-2 w-1/6"
              }
            >
              {usernameLoading ? (
                <FontAwesomeIcon
                  icon={usernameLoading ? faSpinner : faEye}
                  className="text-white animate-spin"
                />
              ) : (
                <FontAwesomeIcon
                  icon={isUsernameValid ? faCheck : faX}
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

      <div
        className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700"
        role="alert"
      >
        <div className="flex p-4">
          <div className="flex-shrink-0">
            <svg
              className="flex-shrink-0 size-4 text-red-500 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
            </svg>
          </div>
          <div className="ms-3">
            <p className="text-sm text-gray-700 dark:text-neutral-400">
              This is an error message.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
