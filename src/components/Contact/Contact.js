import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Spring } from "react-spring/renderprops";
import FaceIcon from "@material-ui/icons/Face";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_85x5e9j",
        "template_5n0zy1w",
        e.target,
        "user_hITQeIJ0Uova4jj8vAA67"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for sending a message to me. I will reply soon! Have a great day!");
        },
        (error) => {
          console.log(error.text);
          alert(error.message);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact">
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 600 }}
      >
        {(props) => (
          <div className="contact__title" style={props}>
            <div className="contact__brandTitle">CONTACT</div>
            <div className="contact__kmm">Get In Touch</div>
          </div>
        )}
      </Spring>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 600 }}
      >
        {(props) => (
          <div className="contact_body">
            
            <form onSubmit={sendEmail} className="email_form" style={props}>
              <img src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/64257172_828970920835460_4228533205721939968_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=SZ7zHGCV2pAAX_UzuEu&_nc_ht=scontent.fhan2-6.fna&oh=0b21925527daed6cf7fa71712e39d386&oe=60091275" alt=""/>
              <div class="wrapper">
                <div class="input-data">
                  <input type="text" required name="user_name" />
                  <div class="underline"></div>
                  <label>Name</label>
                </div>
                <div class="input-data">
                  <input type="text" required name="user_email" />
                  <div class="underline"></div>
                  <label>Email</label>
                </div>
              </div>
              <textarea
                className="email_content"
                cols="30"
                rows="5"
                placeholder="Tell me more about your needs..."
                name="message"
              ></textarea>
              <input type="submit" className="btn" value="Send message"></input>
            </form>
            <div className="contact_bodyRight" style={props}>
              <div className="body_rightInfo">
                <h2>My details</h2>
                <div className="contact_details">
                  <div className="logo">
                    <FaceIcon />:
                  </div>
                  <div className="text-details name">Bui Tuan Tai</div>
                </div>
                <div className="contact_details">
                  <div className="logo">
                    <PhoneIcon />:
                  </div>
                  <div className="text-details name">+84 364 337 191</div>
                </div>
                <div className="contact_details">
                  <div className="logo">
                    <EmailIcon />:
                  </div>
                  <div className="text-details name">pxmrtai97@gmail.com</div>
                </div>
                <div className="contact_details">
                  <div className="logo">
                    <HomeIcon />:
                  </div>
                  <div className="text-details name">
                    34/111 Quan Hoa str, Cau Giay district, Hanoi, Vietnam
                  </div>
                </div>
              </div>
              <div className="body_rightReferences">
                <h2>References</h2>
                <div className="referent_details">
                  <div className="referent_name">Nguyen Thi Hien</div>
                  <div className="referent_position">General Management of Electric-smiles</div>
                  <div className="referent_email"><span>Email: </span>hien.nguyen08207@gmail.com</div>
                  <div className="referent_phone"><span>Phone: </span>+84 39 885 4248</div>
                </div>
                <div className="referent_details">
                  <div className="referent_name">John France</div>
                  <div className="referent_position">CEO of Langports school</div>
                  <div className="referent_email"><span>Email: </span>jf@langports.com</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
}

export default Contact;
