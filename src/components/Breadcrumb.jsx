import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export const BreadcrumbHome = () => {
  const { t } = useTranslation();

  return (
    <Breadcrumb listClassName="mb-0">
      <BreadcrumbItem>
        <Link to="/">{t("General|Home")}</Link>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
