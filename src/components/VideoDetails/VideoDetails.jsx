import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

export default function VideoDetails({
  title,
  channel,
  timestamp,
  views,
  likes,
  description,
}) {
  const date = new Date(timestamp); 

  return (
    <section className="video-details">
      <h1 className="video-details__title">{title}</h1>
      <div className="video-details__container">
        <div className="video-details__box">
          <span className="video-details__creator">{"By " + channel}</span>

          <span className="video-details__date">
            {date.toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="video-details__box">
          <div className="video-details__views">
            <img
              src={viewsIcon}
              alt="views-eyeball-icon"
              className="video-details__views-icon"
            />
            <span className="video-details__views-amount">{views}</span>
          </div>

          <div className="video-details__likes">
            <img
              src={likesIcon}
              alt="heart-likes-icon"
              className="video-details__likes-icon"
            />
            <span className="video-details__likes-amount">{likes}</span>
          </div>
        </div>
      </div>
      <p className="video-details__description">{description}</p>
    </section>
  );
}
