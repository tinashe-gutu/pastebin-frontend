import { setNavSelection } from "../utils/interfaces";
import { NavLink } from "react-router-dom";
interface INav {
  setNavSelection: setNavSelection;
  navSelection: string;
}

export default function Nav({
  setNavSelection,
  navSelection,
}: INav): JSX.Element {
  return (
    <nav>
      <NavLink className="navLink" to="/">
        homepage
      </NavLink>
      <NavLink className="navLink" to="summary">
        summary list
      </NavLink>
    </nav>
  );
}
