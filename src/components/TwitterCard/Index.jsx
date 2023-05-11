import React from "react";
import "./TwitterCard.css"; // Import the CSS file for styling

const TwitterCard = ({name, username, bio}) => {
  return (
    <div className="twittercard-section">
      <h2>Your Lead's Bio</h2>
      <div className="user-box">
        <div className="user-info">
          <div className="details">
          <h2 className="head-img">U</h2>
          <div className="username">
          <h1 className="title">
            {name}
            <svg
              viewBox="0 0 512 512"
              width="100"
              title="check-circle"
              className="check"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
            </svg>
          </h1>
          <h4 className="sub-title">
            {username}
          </h4>
          </div>
          </div>

        </div>

        <p className="box-description">
          <strong>BIO:</strong> {bio}
        </p>
      </div>
    </div>
  );
};

export default TwitterCard;
