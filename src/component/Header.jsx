import React from 'react'

const Header = () => {
  const nav = {
    backgroundColor: "#344e41",
    padding: "5px 50px",
    margin: "0",
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: 'center',
    position: "fixed",
    fontSize: "20px",
    top: "0",
    left: "0",
    zIndex: "1",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
    gap: "10px",
    textTransform: "capitalize",
    height: '60px'
  };
  const link = {
    textDecoration: "none",
    color: "white",
  };
  const active = {
    textDecoration: "none",
    color: "#e76f51",
  };
    return (
      <>
        <div style={nav} >
          <a href="#" style={link}>home /</a>
          <a href="#" style={link}>user /</a>
          <a href="#" style={active}>user profile</a>
        
        </div>
      </>
    )
}

export default Header
