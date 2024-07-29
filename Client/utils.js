import { toast } from "react-toastify";

export const handleSuccess = (msg) => {
  toast.success(msg, {
    position: "top-right",
    // icon: false, // Remove any default success icon if present
  });
};

export const handleError = (msg) => {
  toast.error(msg, {
    position: "top-right",
    // icon: false, // Remove the exclamation mark icon
  });
};
