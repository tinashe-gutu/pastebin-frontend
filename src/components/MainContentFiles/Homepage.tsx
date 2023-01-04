import { IHomepage } from "../../utils/interfaces"

export default function Homepage({pasteInput, setPasteInput, setFetchedPaste}: IHomepage):JSX.Element {
    return (
        <>
            <div className="pasteContainer">
                <form>
                    <input type="text" placeholder="Title (optional)" value={pasteInput.title} />
                    <input type="textarea" value={pasteInput.summary} />
                </form>
            </div>
        </>
    )
}