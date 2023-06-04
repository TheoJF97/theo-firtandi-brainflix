import { Link } from "react-router-dom";

export default function VideoNav({ videos, currentVideo }) {
  const filteredVideos = videos.filter((video) => {
    return video.id !== currentVideo.id;
  });

  //If axios retrieval lags, show user it's loading
  if (!videos) {
    return <h1>LOADING</h1>;
  }

  return (
    <nav className="video-nav">
      <h4 className="video-nav__subheader">NEXT VIDEOS</h4>

      <ul className="video-nav__list">
        {filteredVideos.map((video) => {
          return (
            <li className="video-nav__video" key={video.id}>
              <Link to={`/videos/${video.id}`} className="video-nav__link">
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
