import { Module } from "asab_webui_components";

import { TableScreen } from "./TableScreen.jsx";
import { UserDetail } from "../components/UserDetail.jsx";

export default class TableApplicationModule extends Module {
  constructor(app) {
    super(app, "TableApplicationModule");

    app.Router.addRoute({
      path: "/",
      end: false,
      name: "Table",
      component: TableScreen,
    });

    app.Router.addRoute({
      path: "/users/:id",
      end: false,
      name: "User Detail",
      component: UserDetail,
    });

    app.Navigation.addItem({
      name: "Table",
      icon: "bi bi-table",
      url: "/",
    });
  }
}
