import PropTypes from "prop-types";
import defaultUser from "../data/defaultUser";

const Profession = ({ profession }) => {
  
  return (
    <div>
      <h2 id="profession" className="itemProfile">
        profession
      </h2>
      <p>profession: {profession.domain}.</p>
      <p>
        skills :{" "}
        <span style={{ textTransform: "uppercase" }}>
          {profession.skills.join(" || ")}
        </span>{" "}
      </p>
      
    </div>
  );
};

Profession.propTypes = {
  profession: PropTypes.object,
};

Profession.defaultProps = {
  profession: defaultUser.profession,
};

export default Profession;
