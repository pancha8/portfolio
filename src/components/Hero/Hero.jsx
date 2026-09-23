import React from "react";
import styles from "./Hero.module.css";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          {/* ฝั่งข้อความ */}
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi, it's me</p>

            {/* เปลี่ยนชื่อของคุณตรงนี้ */}
            <h1 className={styles.text_2}>Panchanan</h1>

            <p className={styles.text_3}>
              I'm a
              <span className={styles["typing-effect"]}>
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    1000,
                    "Front-end Developer",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>

            <p className={styles.text_4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              fugiat commodi quas cupiditate minus dolore nulla eos accusantium
              labore explicabo.
            </p>

            {/* ไอคอนโซเชียล */}
            <ul className={styles.hero_social}>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>

          {/* ฝั่งรูปภาพ (ดึงรูปจาก CSS background-image) */}
          <Tilt>
            <div className={styles.hero_img}></div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
