import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../utils/envBaseURL";
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
    body: "",
  });
  const [fetchedPastes, setFetchedPastes] = useState<IFetchedPaste[]>([]);
  const [activeIndex, SetActiveIndex] = useState<number>();

  const handleInputChange = (e: inputEvent) => {
    setPasteInput(() => {
      if (e.target.name === "title") {
        return { ...pasteInput, title: e.target.value };
      } else {
        return { ...pasteInput, body: e.target.value };
      }
    });
  };

  const fetchPastes = async () => {
    const response = await axios.get(baseUrl + "/pastes");
    console.log(response);
    setFetchedPastes(response.data);
  };
  const handleSubmitPaste = async () => {
    if (pasteInput.body.length > 0) {
      await axios.post(baseUrl + "/pastes", pasteInput);
      fetchPastes();
      setPasteInput({
        title: "",
        body: "",
      });
    } else {
      window.alert("Body must not be empty");
    }
  };

  useEffect(() => {
    fetchPastes();
  }, []);
  return (
    <>
      {singleSummaryIndex !== undefined ? (
        fetchedPastes
          .filter((paste) => paste.id === singleSummaryIndex)
          .map((paste) => (
            <SingleSummary
              paste={paste}
              key={paste.id}
              isActive={activeIndex === paste.id}
              setActiveIndex={SetActiveIndex}
              singleSummaryIndex={singleSummaryIndex}
              setSingleSummaryIndex={setSingleSummaryIndex}
            />
          ))
      ) : (
        <>
      {navSelection === "homepage" ? (
        <Homepage
          pasteInput={pasteInput}
          setPasteInput={handleInputChange}
          setFetchedPaste={setFetchedPastes}
          handleSubmitPaste={handleSubmitPaste}
        />
      ) : (
              singleSummaryIndex={singleSummaryIndex}
              setSingleSummaryIndex={setSingleSummaryIndex}
              isActive={activeIndex}
              setActiveIndex={SetActiveIndex}
      )}
    </>
  );
}
