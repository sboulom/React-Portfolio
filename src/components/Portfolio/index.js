import React from "react"

export default function Portfolio(){

    return(
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Steven Boulom</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="./index.html"
                >About <span className="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="./contact.html"
                >Contact <span className="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="./portfolio.html"
                >Portfolio <span className="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="https://github.com/sboulom"
                >Git Hub <span className="sr-only">(current)</span></a
              >
            </li>

            <li className="nav-item active">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/steven-boulom-4a2384110/"
                >Linked In <span className="sr-only">(current)</span></a
              >
            </li>
            <br />
            <li className="nav-item active">
              <a className="nav-link" href="Steven Boulom's Resume.pdf"
                >Resume <span className="sr-only">(current)</span></a
              >
            </li>
          </ul>
        </div>
      </nav>
        <div className="container" className="card" id="addShadow">
            <div className="row">
              <div className="col-sm-6">
                <h5><a className="project-link" href="https://sboulom.github.io/calendar/">Day Planner</a><span className= "divider">|</span>
                <a className="project-link" href="https://github.com/sboulom/calendar">Git Hub Repo</a>
                </h5>
                <img src="Day Planner.png" className="img"/>
              </div>
             
              <div className="col-sm-6">
                <h5><a className="project-link" href="https://sboulom.github.io/Weather-Dashboard/">Weather Dashboard</a><span className= "divider">|</span>
              <a className="project-link" href="https://github.com/sboulom/Weather-Dashboard">Git Hub Repo</a>
                </h5>
                <img src="Weather.png" className="img"/>
                </div>
                
            </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <h5><a className="project-link" href="https://elliotfouts.github.io/local-eats/">Local Eats</a><span className= "divider">|</span>
              <a className="project-link" href="https://github.com/elliotfouts/local-eats">Git Hub Repo</a>
            </h5>
            <img src="Local Eats.png" className="img"/>
          </div>
          <div className="col-sm-6">
            <h5><a className="project-link" href="https://boiling-brushlands-16994.herokuapp.com/">Note Taker</a><span className= "divider">|</span>
              <a className="project-link" href="https://github.com/sboulom/Note-Taker">Git Hub Repo</a>
            </h5>
            <img src="NoteTaker.png" className="img"/>
          </div>
        </div>
        <br>
        <div className="row">
          <div className="col-sm-6">
            <h5><a className="project-link" href="hhttps://sboulom.github.io/Quiz/">Code Quiz</a><span className= "divider">|</span>
              <a className="project-link" href="https://github.com/sboulom/Quiz">Git Hub Repo</a>
            </h5>
            <img src="quiz.png" className="img"/>
          </div>
          
         
        </div>
        </br>
        </div>
    )
}