import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./normalize.css";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop/>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>
);
