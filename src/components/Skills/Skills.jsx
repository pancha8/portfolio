import React from "react";
import styles from "./Skills.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaSquareJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa6";
import Tilt from "react-parallax-tilt";

function Skills() {
  return (
    <div className={styles.skills_con}>
      <h3 className={styles.skills_title}>My Skill set</h3>
      <ul className={styles.skills_list}>
        <li>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <FaHtml5 />
          </Tilt>
        </li>
        <li>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <FaCss3Alt />
          </Tilt>
        </li>
        <li>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <FaSquareJs />
          </Tilt>
        </li>
        <li>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <FaReact />
          </Tilt>
        </li>
        <li>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <FaNodeJs />
          </Tilt>
        </li>
        <li>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <FaGitAlt />
          </Tilt>
        </li>
        <li>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <FaFigma />
          </Tilt>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
