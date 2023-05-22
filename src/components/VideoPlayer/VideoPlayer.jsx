export default function VideoPlayer({ image }) {
  return (
    <section className="video">
      <div className="video__container">
        <video controls poster={image} className="video__current"></video>
      </div>
    </section>
  );
}
