import React from "react"
import "./index.css"

export default function Portfolio(){

    return(
    <div className="container">
        <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h5><a className="project-link" href="https://sboulom.github.io/calendar/">Day Planner</a><span className= "divider">|</span>
                <a className="project-link" href="https://github.com/sboulom/calendar">Git Hub Repo</a>
                </h5>
                <img src="/assets/images/Day Planner.png" className="img"/>
              </div>
             
              <div className="col-sm-6">
                <h5><a className="project-link" href="https://sboulom.github.io/Weather-Dashboard/">Weather Dashboard</a><span className= "divider">|</span>
              <a className="project-link" href="https://github.com/sboulom/Weather-Dashboard">Git Hub Repo</a>
                </h5>
                <img src="/assets/images/weather.png" className="img"/>
                </div>
                
            </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <h5><a className="project-link" href="https://elliotfouts.github.io/local-eats/">Local Eats</a><span className= "divider">|</span>
              <a className="project-link" href="https://github.com/elliotfouts/local-eats">Git Hub Repo</a>
            </h5>
            <img src="/assets/images/local eats.png" className="img"/>
          </div>
          <div className="col-sm-6">
            <h5><a className="project-link" href="https://boiling-brushlands-16994.herokuapp.com/">Note Taker</a><span className= "divider">|</span>
              <a className="project-link" href="https://github.com/sboulom/Note-Taker">Git Hub Repo</a>
            </h5>
            <img src="/assets/images/notetaker.png" className="img"/>
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-6">
            <h5><a className="project-link" href="hhttps://sboulom.github.io/Quiz/">Code Quiz</a><span className= "divider">|</span>
              <a className="project-link" href="https://github.com/sboulom/Quiz">Git Hub Repo</a>
            </h5>
            <img src="/assets/images/quiz.png" className="img"/>
          </div>
          
         
        </div>
      
        </div>
    )
}