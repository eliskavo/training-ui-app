import React from "react";

export const ProfileCircle = ({ name }) => (
  <div
    style={{ width: "4rem", height: "4rem" }}
    className="rounded-circle bg-primary border text-white d-flex justify-content-center align-items-center flex-shrink-0"
  >
    <span className="fs-4">{name[0].toUpperCase()}</span>
  </div>
);
