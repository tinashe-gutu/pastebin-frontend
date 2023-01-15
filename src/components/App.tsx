import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import MainContent from "./MainContent";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Homepage from "./MainContentFiles/Homepage";
import SummaryList from "./MainContentFiles/SummaryList";


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
