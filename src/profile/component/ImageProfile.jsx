import React from "react";
import defaultUser from "../data/defaultUser";
import PropTypes from "prop-types";

const ImageProfile = ({ image }) => {
  const inner = {
    width: "300px",
    height: "300px",
    borderRadius: "100%",
    border: '20px solid black',
  };
  
  return (
    <div>
      <div>
        <img src={image} alt="profile picture" style={inner} />
      </div>
    </div>
  );
};

ImageProfile.propTypes = {
  image: PropTypes.string,
};

ImageProfile.defaultProps = {
  image: defaultUser.image,
};

export default ImageProfile;
