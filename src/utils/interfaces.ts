export type setNavSelection = React.Dispatch<React.SetStateAction<string>>

export interface IHomepage {
    pasteInput: IPasteInput,
    setPasteInput: React.Dispatch<React.SetStateAction<IPasteInput>>,
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
