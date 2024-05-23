import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import {
  faStopwatch,
  faShieldHalved,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import HomeCarousel from "../Carousel/HomeCarousel";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-center text-9xl text-white friendship-font my-10">
        Friendship
      </h1>
      <h1 className="text-center text-2xl text-white my-10">
        Reliable
        <FontAwesomeIcon
          icon={faCircleDot}
          className="text-sm align-middle mx-2"
        />
        Loyal
        <FontAwesomeIcon
          icon={faCircleDot}
          className="text-sm align-middle mx-2"
        />
        Real Fr
      </h1>
      <div className="bg-violet-950 py-20">
        <HomeCarousel />
      </div>

      <div className="flex justify-evenly my-10">
        <div className="p-10 rounded-xl bg-white border-2 border-blue-900 ">
          <h1 className="text-center">
            <FontAwesomeIcon icon={faStopwatch} />
          </h1>
          <p className="text-center font-bold text-gray-500">Reliable</p>
          <hr />
          <p className="text-center">
            We are reliable and we are
            <br />
            always there for you
          </p>
        </div>
        <div className="p-10 rounded-xl bg-white border-2 border-blue-900 ">
          <h1 className="text-center">
            <FontAwesomeIcon icon={faShieldHalved} />
          </h1>
          <p className="text-center font-bold text-gray-500">Safe</p>
          <hr />
          <p className="text-center">
            We are safe and we
            <br />
            keep your cargo safe
          </p>
        </div>
        <div className="p-10 rounded-xl bg-white border-2 border-blue-900 ">
          <h1 className="text-center">
            <FontAwesomeIcon icon={faDollarSign} />
          </h1>
          <p className="text-center font-bold text-gray-500">Cheap</p>
          <hr />
          <p className="text-center">
            We are cheap and we
            <br />
            offer the best prices
          </p>
        </div>
      </div>
    </div>
  );
}
