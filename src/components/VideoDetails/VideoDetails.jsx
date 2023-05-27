//import icons
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

//import react hooks, axios, and API Connection
import { useEffect, useState } from "react";
import axios from "axios";
import { getVideoEndpoint } from "../../utils/api";

export default function VideoDetails({ currentVideoId }) {
  const [video, setVideo] = useState(null);

  //Get current video's details
  useEffect(() => {
    axios.get(getVideoEndpoint(currentVideoId)).then((response) => {
      setVideo(response.data);
    });
  }, [currentVideoId]);

  //If axios retrieval lags, show user it's loading
  if (!video) {
    return <h1>Loading</h1>;
  }

  const date = new Date(video.timestamp);

  return (
    <section className="video-details">
      <h1 className="video-details__title">{video.title}</h1>
      <div className="video-details__container">
        <div className="video-details__box">
          <span className="video-details__creator">
            {"By " + video.channel}
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
            <span className="video-details__views-amount">{video.views}</span>
          </div>

          <div className="video-details__likes">
            <img
              src={likesIcon}
              alt="heart-likes-icon"
              className="video-details__likes-icon"
            />
            <span className="video-details__likes-amount">{video.likes}</span>
          </div>
        </div>
      </div>
      <p className="video-details__description">{video.description}</p>
    </section>
  );
}
