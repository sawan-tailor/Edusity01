import React from "react";
import "./Contact.css";
import photo22 from '../../assets/photo22.png';
import photo23 from '../../assets/photo23.png';
import photo24 from '../../assets/photo24.png';
import photo25 from '../../assets/photo25.png';
import photo03 from '../../assets/photo03.png';
import { Link } from 'react-scroll';

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a761a0c5-81db-496d-a300-d35750ea882d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={photo22} alt="" /></h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
            <li><img src={photo23} alt="" />Contact@GreatStack.dev</li>
            <li><img src={photo24} alt="" />+1 123-456-7890</li>
            <li><img src={photo25} alt="" />7 Massachusetts Ave, Cambridge <br />
            MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter your name" required />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" />
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
            <button type="Submit" className="btn dark-btn">Submit now <img src={photo03} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
