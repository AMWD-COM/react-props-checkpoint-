import React from "react";
import PropTypes from "prop-types";
import FullName from "./FullName";
import defaultUser from "../data/defaultUser"
import user from "../data/User";
const Bio = ({ age, married, address }) => {


  return (
    <div>
      <h2 className="itemProfile">bio</h2>
      <div className="fullName">
        <FullName firstname={user.firstname} lastname={user.lastname}>
          Full Name :
        </FullName>
      </div>
      <p>age : {age} </p>
      <p>statuts : {married ? "Marrierd" : "Bachelor"} </p>
      <p className="address">
        address : {address.address1}, {address.address2}
      </p>
    </div>
  );
};

Bio.propTypes = {
  age: PropTypes.number,
  married: PropTypes.bool,
  address: PropTypes.object,
};
Bio.defaultProps = {
  age: defaultUser.age,
  married: defaultUser.married,
  address: defaultUser.address,
};

export default Bio;
