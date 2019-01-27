import * as ReactGA from "react-ga";
import { isSnapShot } from "./snapShot";

export class GA {
  public static init() {
    !isSnapShot &&
      ReactGA.initialize("UA-130595381-1", {
        debug: process.env.NODE_ENV === "development"
      });
  }

  public static track() {
    !isSnapShot && ReactGA.set({ page: window.location.pathname });
    !isSnapShot && ReactGA.pageview(window.location.pathname);
  }
}
