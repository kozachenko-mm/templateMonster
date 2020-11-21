import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import styles from './HomePage.module.css'
import ListImages from "../../components/ListImages/ListImages";
import ChooseAmount from '../../components/ChooseAmount/ChooseAmount'

import * as Api from "../../services/api";

const HomePage = () => {
  const [listImages, setListImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Api.getListImages(3, 20)
      .then(({ data }) => setListImages(data))
      .catch((err) => setIsError(!!err))
      .finally(setIsLoading(false));
  }, []);
//   console.log(listImages);
  return (
    <div>
        <ChooseAmount />
      {isError && <p>Error please reload the page!</p>}
      {isLoading && <Loader className={styles.loader} type="Oval" color="#00BFFF" height={200} width={200} />}
      {listImages.length >0 && <ListImages listImages={listImages}/>}
    </div>
  );
};

export default HomePage;
