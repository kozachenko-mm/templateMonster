import React, { useState} from "react";
import Modal from "../Modal/Modal";
import styles from "./PhotoCard.module.css";

const PhotoCard = ({ img }) => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div className={styles.photoCard}>
      <img className={styles.img} src={img.download_url} alt={`by ${img.author}`} />
      <button className={styles.btn} type="button">
        Add to favotite
      </button>

      {/* Кнопка для открытия модалки с большим изображением, появляется при наведении  */}
      <button type="button" className={styles.fullscreenButton} onClick={openModal}>
        <i className="material-icons">zoom_in</i>
      </button>
      {isModal && <Modal onClose={closeModal} imageUrl={img.download_url} />}
    </div>
  );
};

export default PhotoCard;
