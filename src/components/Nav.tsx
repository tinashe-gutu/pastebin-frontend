import { setNavSelection } from "../utils/interfaces"
interface INav {
    setNavSelection: setNavSelection
}

export default function Nav({setNavSelection}: INav): JSX.Element {
    return (
        <nav>
            <button className="homepageButton" onClick={() => setNavSelection('homepage')}>homepage</button>
            <button className="summaryButton" onClick={() => setNavSelection('summary')}>pastes summary</button>
        </nav>
    )
}