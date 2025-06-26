// src/components/StatusModal.jsx
import React from "react";
import { createPortal } from "react-dom";
import { XCircle, CheckCircle } from "lucide-react";

const StatusModal = ({
  isOpen,
  type = "success", // 'success' | 'error'
  title = "",
  message = "",
  onClose = () => {},
  buttonText = "Ok",
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-11/12 max-w-sm text-center">
        {type === "success" ? (
          <CheckCircle size={64} className="mx-auto text-green-600 mb-4" />
        ) : (
          <XCircle size={64} className="mx-auto text-red-600 mb-4" />
        )}
        <h2
          className={`text-2xl font-semibold mb-2 ${
            type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {title}
        </h2>
        <p className="text-gray-700 mb-6 text-sm">{message}</p>
        <button
          onClick={onClose}
          className={`px-6 py-2 rounded-md text-white text-sm font-medium transition-colors ${
            type === "success" ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>,
    document.body
  );
};

export default StatusModal;
