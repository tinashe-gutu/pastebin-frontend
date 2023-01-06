import { useState } from "react";
import { ISummaryList } from "../../utils/interfaces";
import SingleSummary from "./SingleSummary";

export default function SummaryList({
  fetchedPastes,
  isActive,
  setActiveIndex,
}: ISummaryList): JSX.Element {
  const [activeIndex, SetActiveIndex] = useState<number>();

  console.log(fetchedPastes);

  return (
    <div className="summaryListContainer">
      {fetchedPastes.map((paste) => {
        return (
          <SingleSummary
            paste={paste}
            key={paste.id}
            isActive={activeIndex === paste.id}
            setActiveIndex={SetActiveIndex}
          />
        );
      })}
    </div>
  );
}
