import "./ErrorToast.css";
import PropTypes from "prop-types";

export default function ErrorToast(props) {
  ErrorToast.propTypes = {
    errorMessage: PropTypes.string.isRequired,
  };

  return (
    <div className="flex justify-center toast">
      <div
        className="relative top-20 bg-gray-800 border border-black text-red-700 p-3 rounded-lg w-96"
        role="alert"
      >
        <p className="text-sm text-center text-red-700">
          {props.errorMessage}
        </p>
      </div>
    </div>
  );
}
