import React, { useMemo } from "react";
import { DataTableCard2, DateTime } from "asab_webui_components";
import { Link } from "react-router";
import { UncontrolledTooltip } from "reactstrap";
import { useTranslation } from "react-i18next";
import { getUsers } from "../api/user";
import { tableWrapper } from "./Table.module.scss";

export const Table = () => {
  const { t } = useTranslation();

  const columns = useMemo(
    () => [
      {
        title: <span className="d-flex align-items-center gap-1"><i className="bi bi-person"></i>{t("Table|Username")}</span>,
        render: ({ row, ridx }) => (
          <Link
            to={`/users/${row.id}`}
            className="d-block text-primary text-decoration-none"
          >
            <span id={`username-${ridx}`}>{row.username}</span>
            <UncontrolledTooltip target={`username-${ridx}`} placement="top">
              {row.id}
            </UncontrolledTooltip>
          </Link>
        ),
      },
      {
        title: <span className="d-flex align-items-center gap-1"><i className="bi bi-envelope"></i>{t("Table|Email")}</span>,
        render: ({ row }) => (
          <Link
            to={`/users/${row.id}`}
            className="d-block text-reset text-decoration-none"
          >
            {row.email}
          </Link>
        ),
      },
      {
        title: <span className="d-flex align-items-center gap-1"><i className="bi bi-calendar"></i>{t("Table|Created")}</span>,
        render: ({ row }) => (
          <Link
            to={`/users/${row.id}`}
            className="d-block text-reset text-decoration-none"
          >
            <DateTime value={row.created} />
          </Link>
        ),
      },
      {
        title: <span className="d-flex align-items-center gap-1"><i className="bi bi-calendar-check"></i>{t("Table|Last Sign In")}</span>,
        render: ({ row }) => (
          <Link
            to={`/users/${row.id}`}
            className="d-block text-reset text-decoration-none"
          >
            <DateTime value={row.last_sign_in} />
          </Link>
        ),
      },
      {
        title: <span className="d-flex align-items-center gap-1"><i className="bi bi-geo-alt"></i>{t("Table|Address")}</span>,
        render: ({ row }) => (
          <Link
            to={`/users/${row.id}`}
            className="d-block text-reset text-decoration-none"
          >
            {row.address}
          </Link>
        ),
      },
    ],
    [t],
  );

  return (
    <div className={tableWrapper}>
      <DataTableCard2
        columns={columns}
        loader={getUsers}
        header={<h1 className="m-0 fs-5">{t("Table|Users")}</h1>}
        initialLimit={10}
      />
    </div>
  );
};
