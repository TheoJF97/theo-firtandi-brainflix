import axios from "axios";
import { useEffect, useState } from "react";
import { getVideosEndpoint } from "../../utils/api";
import { Link } from "react-router-dom";

export default function VideoNav({ currentVideoId }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(getVideosEndpoint).then((response) => {
      //response.data = array of objects

      const filteredVideos = response.data.filter((video) => {
        return video.id !== currentVideoId;
      });
      setVideos(filteredVideos);
    });
  }, [currentVideoId]);

  return (
    <nav className="video-nav">
      <h4 className="video-nav__subheader">NEXT VIDEOS</h4>

      <ul className="video-nav__list">
        {videos.map((video) => {
          return (
            <li className="video-nav__video">
              <Link to={`/videos/${video.id}`}>
                <div className="video-nav__link-box">
                  <img
                    src={video.image}
                    alt={video.title + " by " + video.channel}
                    className="video-nav__image"
                  />
                  <div className="video-nav__text-box">
                    <h3 className="video-nav__title">{video.title}</h3>
                    <span className="video-nav__channel">{video.channel}</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
