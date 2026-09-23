import React from "react";
import styles from "./Portfolio.module.css";

function Portfolio() {
  return (
    <div className={styles.portfolio_con}>
      <h3 className={styles.portfolio_title}>Portfolio</h3>
      <div className={styles.portfolio_list}>
        <div className={styles.portfolio_items}>
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500"
            alt="Project 1"
          />
          <p className={styles.portfolio_title_text}>Project Title 1</p>
        </div>

        <div className={styles.portfolio_items}>
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500"
            alt="Project 2"
          />
          <p className={styles.portfolio_title_text}>Project Title 2</p>
        </div>

        <div className={styles.portfolio_items}>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500"
            alt="Project 3"
          />
          <p className={styles.portfolio_title_text}>Project Title 3</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
