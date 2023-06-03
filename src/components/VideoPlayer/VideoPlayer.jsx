//import react hooks, axios, and API Connection
// import { useEffect, useState } from "react";

export default function VideoPlayer({ currentVideo }) {
  //If axios retrieval from App() lags, show user it's loading
  if (!currentVideo) {
    return <h1>Loading</h1>;
  }

  return (
    <section className="video">
      <div className="video__container">
        <video
          controls
          poster={currentVideo.image}
          className="video__current"
        ></video>
      </div>
    </section>
  );
}
