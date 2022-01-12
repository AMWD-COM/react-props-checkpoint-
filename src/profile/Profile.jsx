import React from "react";
import Footer from "../component/Footer";
import Alert from "./component/Alert";
import Bio from "./component/Bio";
import FullName from "./component/FullName";
import Profession from "./component/Profession";
import user from "./data/user";
import "./profileStyle/Profile.css"
import ImageProfile from "./component/ImageProfile";
import ContactMe from "./profileStyle/ContactMe";

const Profile = (props) => {
  const headProfileStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textTransform: "uppercase",
    background:
      "linear-gradient(180deg, hsla(150, 12%, 97%, 0.1) 0%, hsla(0, 0%, 62%, 0.4) 24%, hsla(0, 0%, 0%, 0.5) 50%)",
    marginBottom : '150px'
   };

  return (
    <div>
      <div id="userProfile" style={headProfileStyle}>
        <div>{props.children}</div>
        <div className="flip">
          <div className="a">
            <div className="front">
              <FullName firstname={user.firstname} lastname={user.lastname} />
            </div>
            <div className="back">
              <Alert name={user.firstname} handleName={() => handleName()} />
            </div>
          </div>
        </div>
      </div>
      <div id="viewProfile" style={{ textTransform: "capitalize" }}>
        <div className="imageProfile">
          <ImageProfile image={user.image} />
        </div>
        <Bio age={user.age} married={user.married} address={user.address} />
        <Profession />
        <div>
          <ContactMe />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
