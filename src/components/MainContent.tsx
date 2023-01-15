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
    console.log(response);
    setFetchedPastes(response.data);
  };

  const fetchComments = useCallback(async () => {
    console.log(singleSummaryIndex);
    const response = await axios.get(
      baseUrl + `/pastes/${singleSummaryIndex}/comments/`
    );
    console.log(response);
    setFetchedComments(response.data);
  }, [singleSummaryIndex]);

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

  useEffect(() => {
    if (singleSummaryIndex !== undefined) {
      fetchComments();
    }
  }, [singleSummaryIndex, fetchComments]);
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
              fetchComments={fetchComments}
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
