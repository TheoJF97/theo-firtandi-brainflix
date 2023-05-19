export default function VideoNav({ videos, changeSelectedVideo }) {
  //create function that handles the click
  const handleClick = (event, videoId) => {
    event.preventDefault();
    changeSelectedVideo(videoId);
  };

  return (
    <nav className="video-nav">
      <span className="video-nav__subheader">NEXT VIDEOS</span>

      <ul className="video-nav__list">
        {videos.map((video) => {
          return (
            <li className="video-nav__video">
              <a
                onClick={(event) => {
                  handleClick(event, video.id);
                }}
                href="/"
                className="video-nav__link"
              >
                <div className="video-nav__link-box">
                  <img
                    src={video.image}
                    alt={video.title + " by " + video.channel}
                    className="video-nav__image"
                  />
                  <div className="video-nav__text-box">
                    <h4 className="video-nav__title">{video.title}</h4>
                    <p className="video-nav__channel">{video.channel}</p>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
