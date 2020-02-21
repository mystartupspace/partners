import React from "react";
const Home = React.lazy(() => import("./components/Home/Home"));
const NotFound = React.lazy(() =>
  import("./components/Auth/NotFound/NotFound")
);
const InternalError = React.lazy(() =>
  import("./components/Auth/InternalError/InternalError")
);
//partner panel components
const PartnerPanel = React.lazy(() =>
  import("./components/PartnerPanel/Panel/PartnerPanel")
);
const PartnerPanelLogin = React.lazy(() =>
  import("./components/PartnerPanel/PartnerLogin/PartnerLogin")
);
const PartnerSetting = React.lazy(() =>
  import("./components/PartnerPanel/PartnerSetting/PartnerSetting")
);
const PartnerProducts = React.lazy(() =>
  import("./components/PartnerPanel/PartnerProducts/PartnerProducts")
);
//temporary
const ComingSoon = React.lazy(() => import("./components/DefaultInnerLinks"));
const routes = [
  {
    path: "/:lang?",
    exact: true,
    name: "Home",
    component: PartnerPanelLogin,
    navTransform: false,
    navStatus: true
  },
  //partner panel routes
  {
    path: "/:lang?/partnerpanel/panel",
    name: "Partner Panel",
    auth: ["partner"],
    component: PartnerPanel,
    navStatus: true
  },
  // {
  //   path: "/:lang?/partnerpanel/login",
  //   name: "Partner Panel Login",
  //   auth: ["guest", "user", "newcomer"],
  //   component: PartnerPanelLogin,
  //   navStatus: true
  // },
  {
    path: "/:lang?/partnerpanel/setting",
    name: "Partner Panel Setting",
    auth: ["partner"],
    component: PartnerSetting,
    navStatus: true
  },
  {
    path: "/:lang?/partnerpanel/products",
    name: "Partner Panel Products",
    auth: ["partner"],
    component: PartnerProducts,
    navStatus: true
  },
  {
    path: "/:lang?/auth/internalerror",
    name: "Internal Error",
    component: InternalError,
    navStatus: false
  },
  //Notice: 404 page have to defined as the last child of Route object
  {
    component: NotFound,
    navStatus: false
  }
];

export default routes;
