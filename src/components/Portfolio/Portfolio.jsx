import React from "react";
import styles from "./Portfolio.module.css";

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Project Title 2",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Project Title 3",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <div className={styles.portfolio_con}>
      <h3 className={styles.portfolio_title}>Portfolio</h3>
      <div className={styles.portfolio_list}>
        {projects.map((item) => (
          <div key={item.id} className={styles.portfolio_items}>
            <img src={item.image} alt={item.title} />
            <p className={styles.portfolio_title_text}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
