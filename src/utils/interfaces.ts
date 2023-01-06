export type setNavSelection = React.Dispatch<React.SetStateAction<string>>;

export interface IHomepage {
  pasteInput: IPasteInput;
  setPasteInput: (e: inputEvent) => void;
  setFetchedPaste: React.Dispatch<React.SetStateAction<IFetchedPaste[]>>;
  handleSubmitPaste: () => Promise<void>;
}

export interface IPasteInput {
  title?: string;
  body: string;
}

export interface IFetchedPaste {
  id: number;
  title?: string;
  body: string;
}

export type inputEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

export interface IMainContent {
  navSelection: string;
}
export interface ISummaryList {
  fetchedPastes: IFetchedPaste[];
  singleSummaryIndex: number | undefined;
  setSingleSummaryIndex: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  isActive: number | undefined;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export interface ISingleSummary {
  paste: IFetchedPaste;
  isActive: boolean;
  singleSummaryIndex: number | undefined;
  setSingleSummaryIndex: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  fetchedComments?: ISingleComment[];
}

export interface ISingleComment {
  comment_id: number;
  paste_id: number;
  comment: string;
  username: string;
}
