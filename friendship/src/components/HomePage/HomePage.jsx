import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import {
  faStopwatch,
  faShieldHalved,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import HomeCarousel from "../Carousel/HomeCarousel";
import Thingamajig from "./Thingamajig";

export default function HomePage() {
  const text1 = "We are reliable and we are always there for you";
  const text2 = "We are safe and we keep your cargo safe";
  const text3 = "We are cheap and we offer the best prices";

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
        <Thingamajig text={text1} icon={faStopwatch} />
        <Thingamajig text={text2} icon={faShieldHalved} />
        <Thingamajig text={text3} icon={faDollarSign} />
      </div>

      <div></div>
    </div>
  );
}
