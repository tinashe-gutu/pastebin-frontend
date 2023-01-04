import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import MainContent from "./MainContent";

function App(): JSX.Element {

  const [navSelection, setNavSelection] = useState('homepage')


  return (
    <>
      <Nav setNavSelection={setNavSelection}/>
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
