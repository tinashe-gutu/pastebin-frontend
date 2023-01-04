import { useState } from "react";
import Nav from "./Nav";

function App(): JSX.Element {

  const [navSelection, setNavSelection] = useState('homepage')


  return (
    <>
      <Nav setNavSelection={setNavSelection}/>
    </>
  );
}

export default App;
