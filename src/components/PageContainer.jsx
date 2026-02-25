import React from "react";
import { Container } from "reactstrap";

export const PageContainer = ({ children, className }) => (
  <Container
    fluid
    className={`d-flex flex-column flex-grow-1 overflow-hidden ${className}`}
  >
    {children}
  </Container>
);
