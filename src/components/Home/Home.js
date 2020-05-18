import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Home.css"
const Home = () => {
  return (
    <div className="full">
      <div className="container Home">
        <h1 className="logo">KAMAL</h1>
        <div className="row">
          <div className="col">
            <h1 className="main-text">
              Hi, I'm Kamal. I'm a Javascript Developer
            </h1>
            <p className="paragraph">
              Hello guys, Welcome to my portfolio. I'm Kamal from India. I'm a
              JavaScript developer and I work with modern tech stacks and
              JavaScript libraries and frameworks.{" "}
            </p>
            <a className="btn" href="/learn-more">
              Learn more
            </a>
            <a className="btn btn-2" href="/learn-more">
              Projects
            </a>
          </div>
          <div className="col col-img"></div>
        </div>
      </div>
    </div>
  )
}
export default Home
