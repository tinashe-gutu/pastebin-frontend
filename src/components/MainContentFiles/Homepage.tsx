import { IHomepage } from "../../utils/interfaces";

export default function Homepage({
  pasteInput,
  setPasteInput,
  setFetchedPaste,
}: IHomepage): JSX.Element {
  return (
    <>
      <div className="pasteContainer">
        <form>
          <input
            type="text"
            placeholder="Title (optional)"
            value={pasteInput.title}
            name="title"
            onChange={(e) => setPasteInput(e)}
          />
          <textarea
            name="pasteSummary"
            value={pasteInput.summary}
            onChange={(e) => setPasteInput(e)}
          ></textarea>
        </form>
      </div>
    </>
  );
}
