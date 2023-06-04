//import icons
import axios from "axios";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/images/publish.svg";

//import react router hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UploadForm() {
  //Import serverURL: http://localhost:8080
  const { REACT_APP_SERVER_URL: serverUrl } = process.env;

  //Declare react-router hook for Re-Navigation
  const navigate = useNavigate();

  //Declare State variables
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    //POST http://localhost:8080/videos will add a new vid to the video list
    axios
      .post(`${serverUrl}/videos`, {
        title: title,
        description: description,
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });

    alert("Uploaded");
    navigate("/");
  };

  if (error) {
    return "Error posting video. Check console for specific error message";
  }

  return (
    <section className="upload">
      <div className="upload__container">
        <h1 className="upload__header">Upload Video</h1>

        <form className="upload__form" onSubmit={handleOnSubmit}>
          <div className="upload__form-container">
            <div className="upload__thumbnail-container">
              <h4 className="upload__thumbnail-header">VIDEO THUMBNAIL</h4>
              <img
                src={thumbnail}
                alt="blue-bike-in-motion"
                className="upload__thumbnail"
              />
            </div>

            <div className="upload__form-inputs">
              <label className="upload__title">
                TITLE YOUR VIDEO
                <input
                  type="text"
                  className="upload__title-input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Add a title to your video"
                />
              </label>

              <label className="upload__description">
                ADD A VIDEO DESCRIPTION
                <textarea
                  id="videoTitle"
                  className="upload__description-input"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Add a description to your video"
                ></textarea>
              </label>
            </div>
          </div>

          <div className="upload__buttons">
            <button className="upload__publish">
              <img
                src={publish}
                alt="publish-icon"
                className="upload__publish-icon"
              />
              PUBLISH
            </button>

            <button className="upload__cancel">
              {/* Add publish icon for button's centering in mobile viewport */}
              <img
                src={publish}
                alt="publish-icon"
                className="upload__publish-icon"
              />
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
