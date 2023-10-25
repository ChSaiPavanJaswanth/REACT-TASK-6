import React from "react";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
} from "react-icons/di";

const Skills = () => {
  return (
    <div
      id="skill"
      className="me"
      style={{ marginTop: "10%", height: "100vh", paddingTop: "30px" }}
    >
      <h1 style={{ color: "white", lineHeight: "2" }}>
        <strong>Skills</strong>
      </h1>
      <div className="box" style={{ marginTop: "5vh" }}>
        <h2
          style={{ color: "white", marginBottom: "50px", textAlign: "center" }}
        >
          <span style={{ color: "violet" }}>Programming </span>
          Languages
        </h2>
        <CgCPlusPlus className="icon" />
        <DiJava className="icon" />
        <DiPython className="icon" />
        <FaHtml5 className="icon" />
        <FaCss3 className="icon" />

        <DiJavascript1 className="icon" />
        <DiReact className="icon" />
        <DiNodejs className="icon" />
      </div>
      <div
        style={{
          width: "95%",
          textAlign: "end",
        }}
      ></div>
    </div>
  );
};

export default Skills;
