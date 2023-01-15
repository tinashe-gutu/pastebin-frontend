import { setNavSelection } from "../utils/interfaces";
import { Link, NavLink } from "react-router-dom";
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
      <NavLink to="/">homepage</NavLink>
      <NavLink to="summary">summary list</NavLink>
    </nav>
  );
}
