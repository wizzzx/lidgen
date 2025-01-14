const enum AppRoutes {
  MAIN_PAGE = "main_page",
  AUTH = "auth",
  ABOUT = "about",
}

export const routes = {
  [AppRoutes.AUTH]: {
    root: "/user",
  },
  [AppRoutes.ABOUT]: {
    about: "/about",
  },
};
