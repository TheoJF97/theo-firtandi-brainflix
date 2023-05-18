export default function VideoDetails({
  title,
  channel,
  timestamp,
  views,
  likes,
  description,
}) {
  return (
    <>
      <h1 className="video__title">{title}</h1>
      <p className="video__creator">{channel}</p>
      <span className="video__date">{timestamp}</span>
      <span className="video__views">{views}</span>
      <span className="video__likes">{likes}</span>
      <p className="video__description">{description}</p>
    </>
  );
}
