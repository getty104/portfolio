import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import { register } from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
register();
