import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import MainContent from "./MainContent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App(): JSX.Element {
  const [navSelection, setNavSelection] = useState("homepage");

  return (
    <BrowserRouter>
      <Nav setNavSelection={setNavSelection} navSelection={navSelection} />
      <MainContent navSelection={navSelection} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
