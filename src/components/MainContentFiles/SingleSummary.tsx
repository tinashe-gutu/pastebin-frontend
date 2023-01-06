import { ISingleSummary } from "../../utils/interfaces";

export default function SingleSummary({
  paste,
  isActive,
  setActiveIndex,
}: ISingleSummary): JSX.Element {
  const shortenedBody =
    paste.body.length > 640 ? paste.body.slice(0, 639) : undefined;

  return (
      onClick={() => setSingleSummaryIndex(paste.id)}
            e.stopPropagation();
      <h3 className="pasteTitle">{paste.title}</h3>
      <div className="pasteBody">
        {isActive ? (
          <p>
            {paste.body}
                e.stopPropagation();
          </p>
        ) : (
          <p>
            {shortenedBody ?? paste.body}
            {shortenedBody && (
                  e.stopPropagation();
            )}
          </p>
        )}
      </div>
    </div>
  );
}
