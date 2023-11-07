import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";

import "./index.css";
import App from "./App";
import store from "./store";
import "./fonts/index.css";
import theme from "./muiTheme";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);

reportWebVitals();
