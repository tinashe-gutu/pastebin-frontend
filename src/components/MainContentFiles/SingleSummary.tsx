import { ISingleSummary } from "../../utils/interfaces";

export default function SingleSummary({
  paste,
  isActive,
  setActiveIndex,
  singleSummaryIndex,
  setSingleSummaryIndex,
  fetchedComments,
}: ISingleSummary): JSX.Element {
  const shortenedBody =
    paste.body.length > 640 ? paste.body.slice(0, 639) : undefined;

  return (
    <>
      <div
        className={isActive ? "fullView" : "defaultView"}
        onClick={() => setSingleSummaryIndex(paste.id)}
      >
        {singleSummaryIndex && (
          <button
            onClick={(e) => {
              setSingleSummaryIndex(undefined);
              e.stopPropagation();
            }}
          >
            return to pastes summary
          </button>
        )}
        <h3 className="pasteTitle">{paste.title}</h3>
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
      </div>
      {singleSummaryIndex && (
        <div className="commentSection">
          <h4>comments</h4>
          <ul className="commentsList">
            {fetchedComments &&
              fetchedComments.map((comment) => {
                return (
                  <li key={comment.comment_id}>
                    {comment.username}: {comment.comment}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </>
  );
}
