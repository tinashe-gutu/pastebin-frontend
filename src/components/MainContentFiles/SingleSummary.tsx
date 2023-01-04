import { ISingleSummary } from "../../utils/interfaces";

export default function SingleSummary({ paste }: ISingleSummary): JSX.Element {
  return (
    <div className="singleSummary">
      <h3 className="pasteTitle">{paste.title}</h3>
      <p className="pasteBody">{paste.body}</p>
    </div>
  );
}
