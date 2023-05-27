//import assets
import Mohan from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/add_comment.svg";

//import react hooks, axios, and API Connection
import { useEffect, useState } from "react";
import axios from "axios";
import { getVideoEndpoint } from "../../utils/api";

export default function Comments({ currentVideoId }) {
  const [comments, setComments] = useState([]);

  //get current video's comments
  useEffect(() => {
    axios.get(getVideoEndpoint(currentVideoId)).then((response) => {
      setComments(response.data.comments);
    });
  }, [currentVideoId]);

  //If axios retrieval lags, show user it's loading
  if (!comments) {
    return <h1>Loading</h1>;
  }

  return (
    <section className="comments">
      <p className="comments__amount">{comments.length + " Comments"}</p>

      <form className="comments__form">
        <img
          src={Mohan}
          alt="avatar-mohan-murge"
          className="comments__avatar--mohan"
        />
        <div className="comments__cta">
          <div className="comments__cta-box">
            <label htmlFor="userComment" className="comments__invitation">
              JOIN THE CONVERSATION
            </label>
            <textarea
              name="userComment"
              id="userComment"
              className="comments__input"
              placeholder="Add a new comment"
            ></textarea>
          </div>

          <button className="comments__button">
            <img
              src={commentIcon}
              alt="plus-symbol-inside-message-box"
              className="comments__comment-icon"
            />
            COMMENT
          </button>
        </div>
      </form>

      {comments.map((comment) => {
        const date = new Date(comment.timestamp);

        return (
          <div className="comments__container" key={comment.id}>
            <div className="comments__avatar"></div>
            <div className="comments__content">
              <div className="comments__header">
                <p className="comments__name">{comment.name}</p>
                <span className="comments__timestamp">
                  {date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </div>
              <p className="comments__comment">{comment.comment}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
