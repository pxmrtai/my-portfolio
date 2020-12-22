import React from "react";

import "./Skill.css";

const handleScroll =(e)=>{
  console.log(e);
}


const Skill = (props) => {

  return (
    <div className="skill" >
      <div className="skills-bar" onScroll={handleScroll}>
        <div className="bar">
          <div className="info">
            <span>HTML</span>
          </div>
          <div className="progress_line html"><span></span></div>
        </div>
        <div className="bar">
          <div className="info">
            <span>CSS</span>
          </div>
          <div className="progress_line css"><span></span></div>
        </div>
        <div className="bar">
          <div className="info">
            <span>Javascript</span>
          </div>
          <div className="progress_line javascript"><span></span></div>
        </div>
        <div className="bar">
          <div className="info">
            <span>ReactJS</span>
          </div>
          <div className="progress_line reactjs"><span></span></div>
        </div>
        <div className="bar">
          <div className="info">
            <span>NodeJs</span>
          </div>
          <div className="progress_line nodejs"><span></span></div>
        </div>
        <div className="bar">
          <div className="info">
            <span>ExpressJs</span>
          </div>
          <div className="progress_line expressjs"><span></span></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
