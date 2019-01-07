import * as ReactGA from "react-ga";

export class GA {
  public static init() {
    ReactGA.initialize("UA-130595381-1", {
      debug: process.env.NODE_ENV === "development"
    });
  }

  public static track() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
}
