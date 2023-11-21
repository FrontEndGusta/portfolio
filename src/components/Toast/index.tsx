import React, { ReactNode } from "react";
import { ToastContainer } from "./styles";
import { IoCheckmarkSharp, IoClose } from "react-icons/io5";

type ToastProps = {
  variant?: "success" | "error";
  children: ReactNode;
};
const Toast: React.FC<ToastProps> = ({ variant = "success", children }) => {
  const classVariants: { [key: string]: string } = {
    success: "success-toast",
    error: "error-toast",
  };
  return (
    <ToastContainer>
      <div className={`toast ${classVariants[variant]}`}>
      <span className={`icons ${variant === "error" ? "error" : "success"}`}>
          {variant === "success" ? <IoCheckmarkSharp /> : <IoClose />}
      </span>
      <span>
        {children}
      </span>
      <span className="close"><IoClose/></span>
      </div>
    </ToastContainer>
  );
};

export default Toast;
