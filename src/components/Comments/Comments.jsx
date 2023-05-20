import Mohan from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/add_comment.svg";

export default function Comments({ comments }) {
  console.log(comments.length);
  // const date = new Date(timestamp);
  // <span className="video-details__date">
  //           {date.toLocaleDateString("en-US", {
  //             month: "2-digit",
  //             day: "2-digit",
  //             year: "numeric",
  //           })}
  //         </span>

  //comments is an array of objects

  //comments[i].name
  //comments[i].comment
  //comments[i].timestamp

  return (
    <section className="comments">
      <span className="comments__amount">{comments.length + " Comments"}</span>
      <p className="comments__name">{comments[0].name}</p>
      <p className="comments__comment">{comments[0].comment}</p>

      <p className="comments__timestamp">{comments[0].timestamp}</p>

      <img
        src={Mohan}
        alt="avatar-mohan-murge"
        className="comments__avatar--mohan"
      />

      <span className="comments__invitation">JOIN THE CONVERSATION</span>
      <textarea
        name=""
        id=""
        className="comments__input"
        placeholder="Add a new comment"
      ></textarea>

      <button className="comments__button">
        <img src={commentIcon} alt="" className="comments__comment-icon" />
        COMMENT
      </button>
    </section>
  );
}
