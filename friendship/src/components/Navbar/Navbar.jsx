import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-primary">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
                className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="bg-blue-700 rounded-lg p-3 text-white"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
