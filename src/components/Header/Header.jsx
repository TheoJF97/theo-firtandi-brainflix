import logo from "../../assets/images/BrainFlix-logo.svg";
import Mohan from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/upload.svg";

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="logo__link">
        <img src={logo} alt="BrainFlix-Logo" className="logo" />
      </a>
      <div className="header__functions">
        <div className="search">
          <label htmlFor="search" className="search__label"></label>

          <input
            type="text"
            name="search"
            id="search"
            className="search__function"
            placeholder="Search"
          />
          {/* <img
            src={search}
            alt="magnifying-glass-icon"
            className="search__icon"
          /> */}
        </div>
        <img src={Mohan} alt="avatar-mohan-muruge" className="header__avatar" />
        <button className="upload__function">
          <img src={upload} alt="upload-icon" className="upload__icon" />
          UPLOAD
        </button>
      </div>
    </header>
  );
}
