import React from "react";

const Notification = ({ type, message, onClose }) => {
  const bgColor =
    type === "success"
      ? "bg-green-100 border-green-400 text-green-700"
      : "bg-red-100 border-red-400 text-red-700";

  return (
    <div
      className={`border px-4 py-3 rounded relative mb-4 ${bgColor}`}
      role="alert"
    >
      <strong className="font-bold capitalize">{type}!</strong>
      <span className="block sm:inline ml-2">{message}</span>
      <span
        className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
        onClick={onClose}
        aria-label="Close"
      >
        <svg
          className="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 5.652a1 1 0 00-1.414 0L10 8.586 7.066 5.652a1 1 0 10-1.414 1.414L8.586 10l-2.934 2.934a1 1 0 101.414 1.414L10 11.414l2.934 2.934a1 1 0 001.414-1.414L11.414 10l2.934-2.934a1 1 0 000-1.414z" />
        </svg>
      </span>
    </div>
  );
};

export default Notification;
