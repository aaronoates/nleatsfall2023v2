import React from "react";
import "./style.css";

export const PropertyDefault = ({ className }) => {
  return (
    <div className={`property-default ${className}`}>
      <div className="text-wrapper">name@email.com</div>
      <div className="frame">
        <div className="div">Subscribe</div>
      </div>
    </div>
  );
};
