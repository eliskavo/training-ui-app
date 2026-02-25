import React from "react";
import { Card, CardBody } from "reactstrap";

export const CenterContent = ({ children, className }) => (
  <Card className="h-100">
    <CardBody
      className={`d-flex align-items-center justify-content-center ${className}`}
    >
      {children}
    </CardBody>
  </Card>
);
