import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { useParams } from "react-router";
import { getUserDetail } from "../api/userDetail";
import { BreadcrumbHome } from "./Breadcrumb";
import { ProfileCircle } from "./ProfileCircle";
import { DetailField } from "./DetailField";
import { PageContainer } from "./PageContainer";
import { CenterContent } from "./CenterContent";
import { DateTime } from "asab_webui_components";
import { useTranslation } from "react-i18next";

export const UserDetail = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchUserDetail = async () => {
      setLoading(true);
      const data = await getUserDetail(id);
      setUserDetail(data);
      setLoading(false);
    };
    fetchUserDetail();
  }, [id]);

  if (loading) {
    return (
      <PageContainer>
        <CenterContent className="d-flex flex-column align-items-center gap-2">
          <div className="spinner-border text-primary"></div>
          <div>{`${t("General|Loading")}...`}</div>
        </CenterContent>
      </PageContainer>
    );
  }

  if (!userDetail) {
    return (
      <PageContainer>
        <CenterContent>
          <span className="text-muted">{`${t("Table|User not found")} :(`}</span>
        </CenterContent>
      </PageContainer>
    );
  }

  return (
    <PageContainer fluid className="d-flex flex-column gap-3">
      <BreadcrumbHome />

      <Card>
        <CardBody className="d-flex align-items-center gap-4">
          <ProfileCircle
            name={userDetail.username}
            surname={userDetail.username}
          />
          <div className="d-flex flex-column justify-content-center">
            <h3 className="text-primary m-0">{userDetail.username}</h3>
            <span className="text-muted">{userDetail.email}</span>
          </div>
        </CardBody>
      </Card>

      <Card className="flex-grow-1 overflow-auto">
        <CardHeader>
          <h4 className="m-0">{t("Table|User Detail")}</h4>
        </CardHeader>
        <CardBody>
          <div className="row">
            <div className="col-md-6">
              <DetailField icon="bi bi-person-badge" label={t("Table|User ID")}>
                {id}
              </DetailField>
              <DetailField icon="bi bi-person" label={t("Table|Username")}>
                {userDetail.username}
              </DetailField>
              <DetailField icon="bi bi-envelope" label={t("Table|Email")}>
                {userDetail.email}
              </DetailField>
              <DetailField icon="bi bi-geo-alt" label={t("Table|Address")}>
                {userDetail.address}
              </DetailField>
              <DetailField icon="bi bi-phone" label={t("Table|Phone")}>
                {userDetail.phone_number}
              </DetailField>
            </div>
            <div className="col-md-6">
              <DetailField icon="bi bi-calendar" label={t("Table|Created at")}>
                <DateTime value={userDetail.created} />
              </DetailField>
              <DetailField
                icon="bi bi-calendar-check"
                label={t("Table|Last Sign In")}
              >
                <DateTime value={userDetail.last_sign_in} />
              </DetailField>
              <DetailField label={t("Table|MAC address")}>
                {userDetail.mac_address}
              </DetailField>
              <DetailField label={t("Table|IP address")}>
                {userDetail.ip_address}
              </DetailField>
            </div>
          </div>
        </CardBody>
      </Card>
    </PageContainer>
  );
};
