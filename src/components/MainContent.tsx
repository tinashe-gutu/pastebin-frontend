import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { baseUrl } from "../utils/envBaseURL";

import {
  IPasteInput,
  IFetchedPaste,
  inputEvent,
  IMainContent,
  ISingleComment,
} from "../utils/interfaces";
import Homepage from "./MainContentFiles/Homepage";
import SummaryList from "./MainContentFiles/SummaryList";
import { Route, Routes } from "react-router-dom";
import { FullSummary } from "./MainContentFiles/FullSummary";

export default function MainContent({
  navSelection,
}: IMainContent): JSX.Element {
  const [pasteInput, setPasteInput] = useState<IPasteInput>({
    title: "",
    body: "",
  });
  const [fetchedPastes, setFetchedPastes] = useState<IFetchedPaste[]>([]);
  const [singleSummaryIndex, setSingleSummaryIndex] = useState<
    number | undefined
  >();
  const [activeIndex, SetActiveIndex] = useState<number>();
  const [fetchedComments, setFetchedComments] = useState<ISingleComment[]>([]);

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
    setFetchedPastes(response.data);
  };

  const fetchComments = useCallback(async (pasteId: string) => {
    const response = await axios.get(baseUrl + `/pastes/${pasteId}/comments/`);
    setFetchedComments(response.data);
  }, []);

  const handleSubmitPaste = async () => {
    await axios.post(baseUrl + "/pastes", pasteInput);
    fetchPastes();
    setPasteInput({
      title: "",
      body: "",
    });
  };

  useEffect(() => {
    fetchPastes();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              pasteInput={pasteInput}
              setPasteInput={handleInputChange}
              setFetchedPaste={setFetchedPastes}
              handleSubmitPaste={handleSubmitPaste}
            />
          }
        />
        <Route
          path="/summary"
          element={
            <SummaryList
              fetchedPastes={fetchedPastes}
              singleSummaryIndex={singleSummaryIndex}
              setSingleSummaryIndex={setSingleSummaryIndex}
              isActive={activeIndex}
              setActiveIndex={SetActiveIndex}
            />
          }
        />
        <Route
          path="/summary/singleSummary/:pasteId"
          element={
            <FullSummary
              fetchComments={fetchComments}
              fetchedComments={fetchedComments}
              fetchedPaste={fetchedPastes}
            />
          }
        />
      </Routes>
    </>
  );
}
