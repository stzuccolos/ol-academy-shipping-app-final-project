import "./ErrorToast.css";
import PropTypes from "prop-types";

export default function ErrorToast(props) {
  ErrorToast.propTypes = {
    errorMessage: PropTypes.string.isRequired,
  };

return (
    <div className="flex justify-center mt-5 error-toast">
        <div
            className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700"
            role="alert"
        >
            <div className="flex p-4">
                <p className="text-sm text-gray-700 dark:text-neutral-400">
                    {props.errorMessage}
                </p>
            </div>
        </div>
    </div>
);
}
