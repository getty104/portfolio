import * as ReactGA from "react-ga";
import { isSnapShot } from "./snapShot";

const trackID =
  process.env.NODE_ENV === "development" ? "UA-130595381-2" : "UA-130595381-1";

export class GA {
  public static init() {
    !isSnapShot &&
      ReactGA.initialize(trackID, {
        debug: process.env.NODE_ENV === "development"
      });
  }

  public static track() {
    !isSnapShot && ReactGA.set({ page: window.location.pathname });
    !isSnapShot && ReactGA.pageview(window.location.pathname);
  }
}
