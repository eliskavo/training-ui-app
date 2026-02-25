import React from "react";

export const DetailField = ({ icon, label, children }) => (
  <p className="d-flex flex-column mb-3 gap-1">
    <span className="text-muted d-flex align-items-center gap-1">
      {icon && <i className={{ icon }}></i>}
      {label}
    </span>
    <span>{children}</span>
  </p>
);
