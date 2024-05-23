import { onAuthStateChanged } from "firebase/auth";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../Firebase";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
  }, []);

  return (
    <nav className="bg-primary fixed top-0 w-full z-50 border-b-2 border-violet-950">
      <div className="w-3/4 flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="friendship-font self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
            FriendShip
          </span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          data-collapse-toggle="navbar-menu"
          aria-controls="navbar-menu"
          aria-expanded="true"
        >
          <img src="/src/assets/burger-menu-svgrepo-com.svg" />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-menu">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            {isUserLoggedIn ? (
              <>
                <li>
                  <NavLink
                    to="/profile"
                    className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block py-2 px-3 text-white bg-blue-900 rounded md:bg-transparent md:p-0"
                    onClick={() => {
                      auth.signOut();
                    }}
                  >
                    Logout
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order"
                    className="block py-2 px-3 text-white bg-blue-900 rounded md:bg-transparent md:p-0"
                  >
                    New Order
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="block py-2 px-3 text-white bg-blue-900 rounded md:bg-transparent md:p-0"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
