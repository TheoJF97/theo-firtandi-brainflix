export default function VideoNav({ videos, changeSelectedVideo }) {
  //create function that handles the click
  const handleClick = (event, videoId) => {
    event.preventDefault();
    changeSelectedVideo(videoId);
  };

  return (
    <nav className="video-nav">
      <ul>
        {videos.map((video) => {
          return (
            <li>
              <a
                onClick={(event) => {
                  handleClick(event, video.id);
                }}
                href="/"
              >
                {video.title}
                {video.channel}
                {video.image}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
