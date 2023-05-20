export default function VideoNav({ videos, changeSelectedVideo }) {
  //create function that handles the click
  const handleClick = (event, videoId) => {
    event.preventDefault();
    changeSelectedVideo(videoId);
  };

  return (
    <nav className="video-nav">
      <h4 className="video-nav__subheader">NEXT VIDEOS</h4>

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
                    <h3 className="video-nav__title">{video.title}</h3>
                    <span className="video-nav__channel">{video.channel}</span>
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
