import React from "react";
import me from "./Pictures/about.png";

const AboutMe = () => {
  return (
    <div style={{ height: "100vh", alignItems: "center" }} id="aboutMe">
      <div className="about" style={{ paddingTop: "30vh" }}>
        <div>
          <h1
            style={{
              color: "white",
              textAlign: "center",
              paddingBottom: "50px",
              lineHeight: "1.5",
              marginLeft: "50px",
            }}
          >
            {" "}
            LET ME <span style={{ color: "violet" }}>INTRODUCE </span>MYSELF
          </h1>

          <ul className="aboutm" style={{ lineHeight: "2" }}>
            <li>Hi Everyone, I am Cheemakurti Sai Pavan Jaswanth from Ongole, Andhra Pradesh.</li>
            <li>
              I am currently pursuing my Btech in Vellore Institute of
              Technology.
            </li>
            <li>I am lookingforward for my first work experince.</li>
            <li> I love to explore more Technologies.</li>
          </ul>
        </div>
        <div>
          <img className="img" src={me} alt="pic" />
        </div>
      </div>
      <div
        style={{
          marginTop: "10%",
          width: "95%",
          textAlign: "end",
        }}
      ></div>
    </div>
  );
};

export default AboutMe;
