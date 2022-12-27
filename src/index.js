import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./Pages/Chat/ChatContext/AuthContext";
import { ChatContextProvider } from "./Pages/Chat/ChatContext/ChatContext";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <AuthContextProvider>
      <ChatContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChatContextProvider>
    </AuthContextProvider> */}

    {/* // <React.StrictMode> */}

    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider> */}

    {/* // </React.StrictMode> */}

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthContextProvider>
          <ChatContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ChatContextProvider>
        </AuthContextProvider>
      </PersistGate>
    </Provider>
  </>
);

reportWebVitals();
