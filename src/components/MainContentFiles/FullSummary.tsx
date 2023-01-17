import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../utils/envBaseURL";
import { IFullSummary, InputComment, inputEvent } from "../../utils/interfaces";

export function FullSummary({
  fetchedPaste,
  fetchComments,
  fetchedComments,
}: IFullSummary): JSX.Element {
  const params = useParams();

  useEffect(() => {
    if (params.pasteId) {
      fetchComments(params.pasteId);
    }
  }, [fetchComments]);

  const paste = fetchedPaste.filter((paste) => {
    if (params.pasteId) {
      return paste.id === parseInt(params.pasteId);
    }
    return false;
  })[0];
  const [inputComment, setInputComment] = useState<InputComment>({
    username: "",
    comment: "",
  });
  const handleCommentChange = (e: inputEvent) => {
    setInputComment(() => {
      return { ...inputComment, [e.target.name]: e.target.value };
    });
  };
  const handleSubmitComment = async () => {
    if (params.pasteId) {
      await axios.post(
        baseUrl + `/pastes/${params.pasteId}/comments`,
        inputComment
      );
      fetchComments(params.pasteId);
    }
  };
  return (
    <>
      {paste && fetchedComments && (
        <>
          <div className="pasteBody">
            <h3 className="pasteTitle">{paste.title}</h3>
            <p>{paste.body}</p>
          </div>
          <div className="commentSection">
            <h4>comments</h4>
            <form
              onSubmit={(e) => {
                handleSubmitComment();
                e.preventDefault();
              }}
            >
              <input
                type="text"
                placeholder="username"
                required
                value={inputComment.username}
                name="username"
                onChange={(e) => handleCommentChange(e)}
              />
              <input
                type="text"
                placeholder="add comment"
                required
                value={inputComment.comment}
                name="comment"
                onChange={(e) => handleCommentChange(e)}
              />
              <input type="submit" />
            </form>
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
        </>
      )}
    </>
  );
}
