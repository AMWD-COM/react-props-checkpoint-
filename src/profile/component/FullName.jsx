import React from "react";
import PropTypes from "prop-types";
import defaultUser from "../data/defaultUser";

const FullName = ({ firstname, lastname, children }) => {
  return (
    <>
      <div>
        {children} {firstname} {lastname}
      </div>
    </>
  );
};

FullName.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
};

FullName.defaultProps = {
  firstname: defaultUser.firstname,
  lastname: defaultUser.lastname,
};

export default FullName;
