import React from "react";

const Contact = () => {
  return (
    <div className="grid-2">
      <div>
        <h1 className="title my-2">Get in touch.</h1>
        <p>
          Talk to us! We want to hear your travel stories and all the amazing
          things you’ve found along the way. Have cool products? Hit us up! We
          would love to showcase your amazing work! Want to learn more about
          free trade? We are happy to give you a crash course. Want travel tips?
          Tell us where you’re going, we’ve got the inside scoop!
        </p>
        <h2 className="my-1">OpenMRKTS@gmail.com</h2>
      </div>
      <form>
        First name:
        <br />
        <input type="text" name="firstname" />
        <br />
        Last name:
        <br />
        <input type="text" name="lastname" />
        Email:
        <br />
        <input type="text" name="email" />
        <br />
        Subject:
        <br />
        <input type="text" name="subject" />
        Message:
        <br />
        <textarea rows="4" cols="50"></textarea>
        <button className="btn btn-primary my-2" type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
