
import React, { useState } from "react";
import Select from "react-select";
import styles from './ChooseAmount.module.css'

const options = [
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
  { value: "40", label: "40" },
  { value: "50", label: "50" },
];

export default function ChooseAmount({ handleAmountImages }) {
  const [selectedOption, setSelectedOption] = useState({ value: "10", label: "10" });

  const handleChange = (value) => {
    setSelectedOption(value);
    handleAmountImages(value.value);
  };
  return (
    <div className={styles.selectBox}>
      <p>Выберете количесто фотографий на странице</p>
      <Select className={styles.select} value={selectedOption} onChange={handleChange} options={options} />
    </div>
  );
}
