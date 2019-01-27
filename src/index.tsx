import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import { register } from "./registerServiceWorker";
import { GA } from "./tools/ga";
import { isSnapShot } from "./tools/snapShot";

GA.init();
ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
!isSnapShot && register();
