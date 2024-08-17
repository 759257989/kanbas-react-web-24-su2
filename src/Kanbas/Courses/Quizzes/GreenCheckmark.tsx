import React from 'react';
import { FaCheckCircle, FaCircle } from "react-icons/fa";

interface GreenCheckmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  onClick?: () => void; // Optional onClick handler
}

export default function GreenCheckmark({ className, onClick, ...props }: GreenCheckmarkProps) {
  return (
    <span
      className={`me-1 position-relative ${className}`}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
      {...props}
    >
      <FaCircle className="text-white fs-6" />
      <FaCheckCircle style={{ top: "2px" }} className="text-success position-absolute fs-5" />
    </span>
  );
}
