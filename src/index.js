import "./style";
import { render } from "preact";
import App from "./components/App";

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
