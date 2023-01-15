import { Link } from "react-router-dom";
import { ISingleSummary } from "../../utils/interfaces";

export default function SingleSummary({
  paste,
  isActive,
  setActiveIndex,
}: ISingleSummary): JSX.Element {
  const shortenedBody =
    paste.body.length > 640 ? paste.body.slice(0, 639) : undefined;

  return (
    <>
      <div className={isActive ? "fullView" : "defaultView"}>
        <h3 className="pasteTitle">
          {paste.title ? paste.title : "--no title--"}
        </h3>
        <div className="pasteBody">
          {isActive ? (
            <p>
              {paste.body}
              <button
                onClick={(e) => {
                  setActiveIndex(undefined);
                  e.stopPropagation();
                }}
              >
                show less
              </button>
            </p>
          ) : (
            <p>
              {shortenedBody ?? paste.body}
              {shortenedBody && (
                <button
                  onClick={(e) => {
                    setActiveIndex(paste.id);
                    e.stopPropagation();
                  }}
                >
                  [...]
                </button>
              )}
            </p>
          )}
        </div>
        <Link className="commentLink" to={`singleSummary/${paste.id}`}>
          view comments
        </Link>
      </div>
    </>
  );
}
