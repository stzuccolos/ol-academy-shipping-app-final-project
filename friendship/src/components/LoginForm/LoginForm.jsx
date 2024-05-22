import { useState } from "react";
import "./LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faEye,
  faEyeSlash,
  faSpinner,
  faX,
} from "@fortawesome/free-solid-svg-icons";

export default function LoginForm() {
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

  return (
    <>
      <div className="login-form bg-gray-900 shadow-lg py-10 px-5 rounded-3xl border-blue-950 border-2 ">
        <h1 className="text-3xl text-white text-center my-5">Login</h1>
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
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
