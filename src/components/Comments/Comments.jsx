import Mohan from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/add_comment.svg";

export default function Comments({ comments }) {
  // const date = new Date(timestamp);
  // <span className="video-details__date">
  //           {date.toLocaleDateString("en-US", {
  //             month: "2-digit",
  //             day: "2-digit",
  //             year: "numeric",
  //           })}
  //         </span>

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
            <img src={commentIcon} alt="" className="comments__comment-icon" />
            COMMENT
          </button>
        </div>
      </form>

      {comments.map((comment) => {
        const date = new Date(comment.timestamp);

        return (
          <div className="comments__container">
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
