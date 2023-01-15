import { IHomepage } from "../../utils/interfaces";

export default function Homepage({
  pasteInput,
  setPasteInput,
  setFetchedPaste,
  handleSubmitPaste,
}: IHomepage): JSX.Element {
  return (
    <div className="pasteContainer">
      <form
        onSubmit={(e) => {
          handleSubmitPaste();
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Title (optional)"
          value={pasteInput.title}
          name="title"
          onChange={(e) => setPasteInput(e)}
          className="titleInput"
        />
        <textarea
          name="pasteSummary"
          value={pasteInput.body}
          onChange={(e) => setPasteInput(e)}
          placeholder="Enter Paste"
          required
        ></textarea>
        <input type="submit" className="submitPaste" />
      </form>
    </div>
  );
}
