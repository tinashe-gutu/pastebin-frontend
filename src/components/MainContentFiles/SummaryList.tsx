import { ISummaryList } from "../../utils/interfaces";
import SingleSummary from "./SingleSummary";

export default function SummaryList({
  fetchedPastes,
  singleSummaryIndex,
  setSingleSummaryIndex,
  isActive,
  setActiveIndex,
  fetchComments,
}: ISummaryList): JSX.Element {

  return (
    <div className="summaryListContainer">
      {fetchedPastes.map((paste) => {
        return (
          <SingleSummary
            paste={paste}
            key={paste.id}
            isActive={isActive === paste.id}
            setActiveIndex={setActiveIndex}
            singleSummaryIndex={singleSummaryIndex}
            setSingleSummaryIndex={setSingleSummaryIndex}
            fetchComments={fetchComments}
          />
        );
      })}
    </div>
  );
}
