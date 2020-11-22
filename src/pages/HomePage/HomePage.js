import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import styles from "./HomePage.module.css";
import ListImages from "../../components/ListImages/ListImages";
import ChooseAmount from "../../components/ChooseAmount/ChooseAmount";
import ControlsButtons from "../../components/ControlsButtons/ControlsButtons";
import * as Api from "../../services/api";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";

const HomePage = () => {
  const [listImages, setListImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [amountImages, setAmountImages] = useState("10");
  const [numberPage, setNumberPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    Api.getListImages(numberPage, amountImages)
      .then(({ data }) => setListImages(data))
      .catch((err) => setIsError(!!err))
      .finally(setIsLoading(false));
  }, [numberPage, amountImages]);

 

  const handleAmountImages = (value) => {
    setAmountImages(value);
    setNumberPage(1);
  };

  const handleButtons = ({ target }) => {
    target.name === "next"
      ? setNumberPage(numberPage + 1)
      : setNumberPage(numberPage - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className='container'>
      <ChooseAmount handleAmountImages={handleAmountImages} />
      <ControlsButtons numberPage={numberPage} handleButtons={handleButtons} />
      {isError && <p>Error please reload the page!</p>}
      {isLoading && (
        <Loader
          className={styles.loader}
          type="Oval"
          color="#00BFFF"
          height={200}
          width={200}
        />
      )}
      {listImages.length > 0 && <ListImages listImages={listImages} />}
      <ControlsButtons numberPage={numberPage} handleButtons={handleButtons} />
      <ScrollUpButton />
    </div>
  );
};

export default HomePage;
