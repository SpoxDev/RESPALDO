import { render } from "preact";
import "./index.css";
import { App } from "./app.tsx";
import "./app.css";

render(<App />, document.getElementById("app")!);
