import "./Profile.css";
import imageIcon from "../assets/developer-dark.svg";
import resume from "../assets/resume.pdf";
function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-title-left">
        <div className="profile-title-left-section">
          <span className="profile-title">HI, I AM SHUBHAM</span>
          <span className="profile-sub-title">A FullStack Developer</span>
          <a
            className="profile-btn view-resume--btn"
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
      <div className="profile-svg-right">
        <img
          className="profile-image-svg"
          src={imageIcon}
          alt="profile-cover"
        />
      </div>
    </div>
  );
}

export default Profile;
