import { useState } from "react";
import {
  IPasteInput,
  IFetchedPaste,
  inputEvent,
  IMainContent,
} from "../utils/interfaces";
import Homepage from "./MainContentFiles/Homepage";
import SummaryList from "./MainContentFiles/SummaryList";

export default function MainContent({
  navSelection,
}: IMainContent): JSX.Element {
  const [pasteInput, setPasteInput] = useState<IPasteInput>({
    title: "",
    summary: "",
  });
  const [fetchedPastes, setFetchedPastes] = useState<IFetchedPaste[]>([]);

  const handleInputChange = (e: inputEvent) => {
    setPasteInput(() => {
      if (e.target.name === "title") {
        return { ...pasteInput, title: e.target.value };
      } else {
        return { ...pasteInput, summary: e.target.value };
      }
    });
  };

  return (
    <>
      <Homepage
        pasteInput={pasteInput}
        setPasteInput={handleInputChange}
        setFetchedPaste={setFetchedPastes}
      />
      <SummaryList fetchedPastes={fetchedPastes} />
    </>
  );
}
