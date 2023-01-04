export type setNavSelection = React.Dispatch<React.SetStateAction<string>>

export interface IHomepage {
    pasteInput: IPasteInput,
    setPasteInput: (e: inputEvent) => void,
    setFetchedPaste: React.Dispatch<React.SetStateAction<IFetchedPaste[]>>
}

export interface IPasteInput {
    title?:string,
    summary:string
}

export interface IFetchedPaste {
    id: number,
    title?:string,
    summary:string
}

export type inputEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
