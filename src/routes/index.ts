const enum AppRoutes {
  MAIN_PAGE = "main_page",
  AUTH = "auth",
  ABOUT = "about",
}

export const routes = {
  [AppRoutes.AUTH]: {
    root: "/user",
  },
  [AppRoutes.MAIN_PAGE]: {
    root: "/",
    info: "/company",
  },
  [AppRoutes.ABOUT]: {
    about: "/about",
  },
};
