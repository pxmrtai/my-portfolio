import React from "react";
import "./About.css";
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";
import SportsSoccerOutlinedIcon from "@material-ui/icons/SportsSoccerOutlined";
import LocalAirportOutlinedIcon from "@material-ui/icons/LocalAirportOutlined";
import MusicNoteOutlinedIcon from "@material-ui/icons/MusicNoteOutlined";
import { Spring } from "react-spring/renderprops";
function About() {
  return (
    <div className="about">
      <Spring
        from={{  opacity:0 }}
        to={{ opacity: 1 }}
        config={{ duration: 600 }}
      >
        {(props) => (
          <div className="about__title" style={props}>
            <div className="about__brandTitle">ABOUT ME</div>
            <div className="about__kmm">Know Me More</div>
          </div>
        )}
      </Spring>
      <div className="about__body">
        <Spring
          from={{ opacity: 0, marginLeft: -200 }}
          to={{ opacity: 1, marginLeft: 0 }}
          config={{ duration: 600 }}
        >
          {(props) => (
            <div className="about__bodyLeft">
              <Spring
                from={{ opacity: 0, marginLeft: -200 }}
                to={{ opacity: 1, marginLeft: 0 }}
                config={{ duration: 600 }}
              >
                {(props) => (
                  <div style={props}>
                    <div className="about__bodyHeader">
                      I'm <span>Tuan Tai,</span> a Web Developer
                    </div>
                  </div>
                )}
              </Spring>
              <Spring
                from={{ opacity: 0, marginLeft: -200 }}
                to={{ opacity: 1, marginLeft: 0 }}
                config={{ delay: 500, duration: 600 }}
              >
                {(props) => (
                  <div style={props}>
                    <p className="text">
                      I help you build brand for your business at an affordable
                      price. I am just new for this industry and I hope that I can be an Internship. I love spending time for coding because when I can find out solution of the problem, it was so greate
                    </p>
                   
                    <p className="text">
                    I love playing sport, especially soccer and dancing. I like spending time playing video game with my friends. Travelling arround the world is one of the things that I wish I can do. 
                    </p>
                  </div>
                )}
              </Spring>


            </div>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0, marginLeft: 500 }}
          to={{ width: 500, opacity: 1, marginLeft: 0 }}
          config={{ duration: 600 }}
        >
          {(props) => (
            <div style={props}>
              <div className="about__bodyRight">
                <ul className="ul">
                  <li className="li">
                    <span className="span">Name: </span> Bui Tuan Tai
                  </li>
                  <li className="li">
                    <span className="span">Email: </span> pxmrtai97@gmail.com
                  </li>
                  <li className="li">
                    <span className="span">Age: </span> 23
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Spring>
      </div>
      <div className="about__footer">
      <Spring
        from={{  opacity:0 }}
        to={{ opacity: 1 }}
        config={{ duration: 600 }}
      >
        {(props) => (
          
        <div className="about__footerTitle" style={props}>My Favorite</div>
          
        )}
      </Spring>
        <div className="about__footerBody">
          <Spring
            from={{ opacity: 0, marginRight: 500 }}
            to={{ opacity: 1, marginRight: 0 }}
            config={{ duration: 600 }}
          >
            {(props) => (
              <div style={props} className="about__footerBody">
                <div className="favorite">
                  <SportsEsportsOutlinedIcon className="favorite__logo" />
                </div>
                <div className="favorite">
                  <SportsSoccerOutlinedIcon className="favorite__logo" />
                </div>
              </div>
            )}
          </Spring>
          <Spring
            from={{ opacity: 0, marginLeft: 500 }}
            to={{ opacity: 1, marginLeft: 0 }}
            config={{ duration: 600 }}
          >
            {(props) => (
              <div style={props} className="about__footerBody">
                <div className="favorite">
                  <LocalAirportOutlinedIcon className="favorite__logo" />
                </div>
                <div className="favorite">
                  <MusicNoteOutlinedIcon className="favorite__logo" />
                </div>
              </div>
            )}
          </Spring>
        </div>
      </div>
    </div>
  );
}

export default About;
