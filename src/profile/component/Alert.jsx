import PropTypes from "prop-types";
import defaultUser from "../data/defaultUser";

const Alert = ({name}) => {
    const handleName = () => {
     
      alert(`Welcome I'm ${name} `);
      
  };
  

  
  return (
    <div >
      <a href="#viewProfile" onClick={handleName}  >
        view profile
      </a>
    </div>
  );
};

Alert.propTypes = {
    handleName: PropTypes.func,
    name : PropTypes.string,
};

Alert.defaultProps = {
    name : defaultUser.firstname
}


export default Alert;
