
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ContactsProvider } from "./components/ContactsContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ContactsProvider>
      <App />
    </ContactsProvider>
  </React.StrictMode>
);
