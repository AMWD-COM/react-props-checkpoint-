import React from 'react'

const ContactMe = () => {

    return (
      <div>
        <form
          style={{ display: "flex", flexDirection: "column", rowGap: "5px" }}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="YourMail@exemple.com"
            style={{
              backgroundColor: "rgba(117, 117, 117, 0.3)",
              borderRadius: "3px",
              color: "#fff",
                border: "none",
              padding:'10px'
            }}
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="13"
            placeholder="Message"
            style={{
              backgroundColor: "rgba(117, 117, 117, 0.3)",
              borderRadius: "3px",
              color: "#fff",
              border: "none",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: "#344e41",
              color: "#e76f51",
              padding: "7px 8px",
              fontFamily: "Montserrat, sans-serif",
              borderRadius: "3px",
              border: "none",
            }}
          >
            Contact Me
          </button>
        </form>
      </div>
    );
}

export default ContactMe
