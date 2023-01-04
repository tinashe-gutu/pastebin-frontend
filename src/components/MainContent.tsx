import { useState } from "react";
import { IPasteInput, IFetchedPaste, inputEvent } from "../utils/interfaces";
import Homepage from "./MainContentFiles/Homepage";

export default function MainContent(): JSX.Element {

    const [pasteInput, setPasteInput] = useState<IPasteInput>({title: '', summary: ''})
    const [fetchedPastes, setFetchedPastes] = useState<IFetchedPaste[]>([])

    const handleInputChange = (e:inputEvent) => {
        setPasteInput(()=> {
            if(e.target.name === 'title') {
                return {...pasteInput, title: e.target.value }
            } else {
                return {...pasteInput, summary: e.target.value}
            }
        })
    }

    return (
        <>
            <Homepage pasteInput={pasteInput} setPasteInput={handleInputChange} setFetchedPaste={setFetchedPastes}/>
        </>
    )
}