import React from "react";
import "./WhatIdo.css";
import Skill from "../Skill/Skill";
import { Spring } from "react-spring/renderprops";

function WhatIdo() {
  return (
    <div className="whatido">
      <Spring
        from={{  opacity:0 }}
        to={{ opacity: 1 }}
        config={{ duration: 1000 }}
      >
        {(props) => (
           <div className="whatido__title" style={props}>
           <div className="whatido__brandTitle">SUMMARY</div>
           <div className="whatido__kmm">Resume</div>
         </div>
        )}
      </Spring>
     
      <div className="footer">
        <Skill />
      </div>
      <div className="resume__body">
        <div className="resume__column">
          <h2 className="header__education">My Education</h2>
          <div className="resume__card">
            <p className="year">2017</p>
            <h3 className="major">Highschool</h3>
          </div>
          <div className="resume__card">
            <p className="year">Feb 2018 - Feb 2019</p>
            <h3 className="major">STUDY ABOARD IN AUSTRALIA</h3>
            <p className="school">Langports</p>
            <p className="text">
              I went to Australia for studying English in 1 year
            </p>
          </div>
          <div className="resume__card">
            <p className="year">May 2020 - Now</p>
            <h3 className="major">FULLSTACK DEVELOPER</h3>
            <p className="school">CodersX</p>
            <p className="text">
              I took a studying online course. I have learned :
              <br />
              - Frontend:
              <br />
              + HTML/CSS
              <br />
              + Javascript
              <br />
              + ReactJs
              <br />
              - Backend:
              <br />
              + NodeJs
              <br />+ ExpressJs
            </p>
          </div>
        </div>
        <div className="resume__column">
          <h2 className="header__education">My Experience</h2>
          <div className="resume__card">
            <p className="year">2015 - 2018</p>
            <h3 className="major">BARTENDER AND WAITER</h3>
            <p className="school">Red river tea room</p>
            <p className="text">
              Main responsibilities:
              <br />
              - service customer.
              <br />
              - training for new staff who work part-time.
              <br />
              Achievements and skills gained:
              <br />
              - Be assessed positively by the bar’s boss: active, extremely
              adaptable...
              <br />
              - Gain customer service skills.
              <br />
              - Improve English communication skill.
              <br />
              - Problem-solving skills.
              <br />
            </p>
          </div>
          <div className="resume__card">
            <p className="year">May 2019 - May 2020</p>
            <h3 className="major">OPERATION ASSISTANT</h3>
            <p className="school">Electric smiles (travel company)</p>
            <p className="text">
              Main responsibilities:
              <br />
              - maintenance, inspection electric bicycle.
              <br />
              - manage the booking tour.
              <br />
              - sale tour to client, agency.
              <br />
              Achievements and Gains:
              <br />
              - Working under pressure.
              <br />

              - Time management.
              <br />

              - Teamwork.
              <br />

              - Problem solving.
              <br />
              - Multi-tasking.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default WhatIdo;
