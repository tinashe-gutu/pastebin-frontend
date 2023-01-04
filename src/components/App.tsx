import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function App(): JSX.Element {

  const [navSelection, setNavSelection] = useState('homepage')


  return (
    <>
      <Nav setNavSelection={setNavSelection}/>
      <Footer />
    </>
  );
}

export default App;
