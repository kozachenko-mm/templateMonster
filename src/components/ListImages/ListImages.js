import React from "react";

import PhotoCard from "../PhotoCard/PhotoCard";
import styles from "./ListImages.module.css";

const ListImages = ({ listImages }) => {
  return (
    <ul className={styles.gallery}>
      {listImages.map((img) => (
        <li className={styles.listItem} key={img.id}>
          <PhotoCard img={img} />
        </li>
      ))}
    </ul>
  );
};

export default ListImages;
