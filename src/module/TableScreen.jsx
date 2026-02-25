import React from "react";
import { Container } from "reactstrap";
import { Table } from "../components/Table";

export const TableScreen = () => {
  return (
    <Container fluid className="d-flex flex-column flex-grow-1 overflow-hidden">
      <Table />
    </Container>
  );
};
