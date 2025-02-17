import { createRoot } from "react-dom/client";
import App from "./layout/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../src/style/App.css";
import { Provider } from "react-redux";
import { myStore } from "./redux";

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={myStore}>
      <App />
    </Provider>
  </>
);
