import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Auth0Provider } from "@auth0/auth0-react";
// eslint-disable-next-line no-unused-vars
const domain = process.env.AUTH0_DOMAIN;
const clientId = process.env.AUTH0_CLIENT_ID;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Auth0Provider
      domain={'dev-j-cpd5sk.us.auth0.com'}
      clientId={'HYSlpi3QG5YoyxSv1YhVsVUfJVdyQt4y'}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
    ,
  </StrictMode>,
  rootElement
);
