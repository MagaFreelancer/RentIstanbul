import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop.jsx";
import "./normalize.css";
import "./index.scss";
import './18n.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <BrowserRouter>
    <ScrollToTop/>
    <Provider store={store}>
      <Suspense>
        <App />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
