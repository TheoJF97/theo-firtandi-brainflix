//import icons
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

export default function VideoDetails({ currentVideo }) {
  //If axios retrieval lags, show user it's loading
  if (!currentVideo) {
    return <h1>LOADING</h1>;
  }

  const date = new Date(currentVideo.timestamp);

  return (
    <section className="video-details">
      <h1 className="video-details__title">{currentVideo.title}</h1>
      <div className="video-details__container">
        <div className="video-details__box">
          <span className="video-details__creator">
            {"By " + currentVideo.channel}
          </span>

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
            <span className="video-details__views-amount">
              {currentVideo.views}
            </span>
          </div>

          <div className="video-details__likes">
            <img
              src={likesIcon}
              alt="heart-likes-icon"
              className="video-details__likes-icon"
            />
            <span className="video-details__likes-amount">
              {currentVideo.likes}
            </span>
          </div>
        </div>
      </div>
      <p className="video-details__description">{currentVideo.description}</p>
    </section>
  );
}
