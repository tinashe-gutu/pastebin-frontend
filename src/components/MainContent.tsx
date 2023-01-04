import { useState } from "react";
import { IPasteInput, IFetchedPaste } from "../utils/interfaces";
import Homepage from "./MainContentFiles/Homepage";

export default function MainContent(): JSX.Element {

    const [pasteInput, setPasteInput] = useState<IPasteInput>({title: '', summary: ''})
    const [fetchedPastes, setFetchedPastes] = useState<IFetchedPaste[]>([])

    return (
        <>
            <Homepage pasteInput={pasteInput} setPasteInput={setPasteInput} setFetchedPaste={setFetchedPastes}/>
        </>
    )
}