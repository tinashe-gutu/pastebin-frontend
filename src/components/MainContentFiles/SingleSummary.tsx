import { ISingleSummary } from "../../utils/interfaces";

export default function SingleSummary({
  paste,
  isActive,
  setActiveIndex,
}: ISingleSummary): JSX.Element {
  const shortenedBody =
    paste.body.length > 640 ? paste.body.slice(0, 639) : undefined;

  return (
    <div className={isActive ? "fullView" : "defaultView"}>
      <h3 className="pasteTitle">{paste.title}</h3>
      <div className="pasteBody">
        {isActive ? (
          <p>
            {paste.body}
            <button onClick={() => setActiveIndex(undefined)}>show less</button>
          </p>
        ) : (
          <p>
            {shortenedBody ?? paste.body}
            {shortenedBody && (
              <button onClick={() => setActiveIndex(paste.id)}>[...]</button>
            )}
          </p>
        )}
      </div>
    </div>
  );
}
