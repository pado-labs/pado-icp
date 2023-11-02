// import logo from "./logo.svg";
import React from "react";
// import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import vConsole from 'vconsole'
import routes from "./router";
import "./assets/css/global.scss";
import "./App.css";
const router = createBrowserRouter(routes);
// const vconsole = new vConsole()
console.log(
  "REACT_APP_ENV",
  process.env.REACT_APP_ENV,
  process.env.REACT_APP_BASEAPI
);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// import React from "react";
// import { createRoot } from "react-dom/client";
// import { createHashRouter, RouterProvider } from "react-router-dom";
// import routes from "@/router";
// const router = createHashRouter(routes);
// const container = document.getElementById("app-container");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript

// // TODO
// root.render(
//   <div className="App">
//     <RouterProvider router={router} />
//   </div>
// );
