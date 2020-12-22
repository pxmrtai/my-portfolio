import React, { useState } from "react";
import "./Portfolio.css";
import { Spring } from "react-spring/renderprops";

var classNames = require("classnames");
function Portfolio() {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const hover1 = () => {
    setHovered1(!hovered1);
  };
  const hover2 = () => {
    setHovered2(!hovered2);
  };
  const hover3 = () => {
    setHovered3(!hovered3);
  };
  const hover4 = () => {
    setHovered4(!hovered4);
  };
  return (
    <div className="portfolio">
      <div className="portfolio__title">
        <div className="portfolio__brandTitle">PORTFOLIO</div>
        <div className="portfolio__kmm">My Work</div>
      </div>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1}}
        config={{ duration: 600 }}
      >
          {props =>(
              <div className="container" style={props}>
              <div
                className={classNames("column", {
                  active1: hovered1,
                })}
                onMouseEnter={hover1}
                onMouseLeave={hover1}
              >
                <div className="content">
                  <h1 className="b1"></h1>
                  <div className="box"></div>
                  <input type="checkbox" className='input'/>
      
                  <div className="toggle">+</div>
                  <div className="details">
                    <h2>Amazon Clone</h2>
                    <a href="https://clone-acff7.web.app" target="_blank" rel="noreferrer">
                      {" "}
                      check it out
                    </a>
                  </div>
                </div>
                <div className="bg bg1"></div>
              </div>
              <div
                className={classNames("column", {
                  active2: hovered2,
                })}
                onMouseEnter={hover2}
                onMouseLeave={hover2}
              >
                <div className="content">
                  <h1 className="b2"></h1>
                  <div className="box"></div>
                  <input type="checkbox" className='input'/>
      
                  <div className="toggle">+</div>
                  <div className="details">
                    <h2>Google Clone</h2>
                    <a href="https://clone-725f7.web.app/" target="_blank" rel="noreferrer">
                      {" "}
                      check it out
                    </a>
                  </div>
                </div>
                <div className="bg bg2 z"></div>
              </div>
              <div
                className={classNames("column", {
                  active3: hovered3,
                })}
                onMouseEnter={hover3}
                onMouseLeave={hover3}
              >
                <div className="content">
                  <h1 className="b3"></h1>
                  <div className="box"></div>
                  <input type="checkbox" className='input'/>
      
                  <div className="toggle">+</div>
                  <div className="details">
                    <h2>Facebook Clone</h2>
                    <a href="https://coderx-facebook-clone.web.app" target="_blank" rel="noreferrer">
                      {" "}
                      check it out
                    </a>
                  </div>
                </div>
                <div className="bg bg3"></div>
              </div>
              <div
                className={classNames("column", {
                  active4: hovered4,
                })}
                onMouseEnter={hover4}
                onMouseLeave={hover4}
              >
                <div className="content">
                  <h1 className="b4 container">
                    <p>Todo App</p>
                  </h1>
                  <div className="box"></div>
                  <input type="checkbox" className='input'/>
      
                  <div className="toggle">+</div>
                  <div className="details">
                    <h2>Todo App</h2>
                    <a href="https://todo-app-675df.web.app/" target="_blank" rel="noreferrer">
                      {" "}
                      check it out
                    </a>
                  </div>
                </div>
                <div className="bg bg4 "></div>
              </div>
            </div>
          )}
      </Spring>
      
    </div>
  );
}

export default Portfolio;
