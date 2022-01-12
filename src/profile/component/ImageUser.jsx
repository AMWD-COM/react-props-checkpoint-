import React from "react";
import defaultUser from "../data/defaultUser";
import PropTypes from "prop-types";

const Image = ({ image }) => {
  const inner = {
    width: "300px",
    height: "300px",
    borderRadius: "100%",
   
  };
  const outer = {
    border: "35px solid rgb(34, 34, 34, 0.5)",
    width: "425px",
    height: "425px",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: '-1px -1px 10px 1px green, 1px 1px 10px 1px #0ebac7'
  };
  return (
    <div>
      <div style={outer}>
        <img src={image} alt="profile picture" style={inner} />
      </div>
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.string,
};

Image.defaultProps = {
  image: defaultUser.image,
};

export default Image;
