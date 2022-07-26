import React from "react";
import ReactDOM from "react-dom/client";
import LoadFooter from "./Components/Footer";
import { LoadHeader } from "./Components/Header";
import LoadHomepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
      {LoadHeader()}
      {LoadHomepage()}
      {LoadFooter()}
    </div>
  );
}

export default App;
