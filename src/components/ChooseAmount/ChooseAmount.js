import React from 'react';
import Select from "react-select";

const options = [
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "40", label: "40" },
];

export default class ChooseAmount extends React.Component {
  state = {
    selectedOption: null,
  };
handleChange = selectedOption => {
  this.setState({ selectedOption });
  console.log(`Option selected:`, selectedOption);
};
  render() {
    const { selectedOption } = this.state;

return (
  <Select
    value={selectedOption}
    onChange={this.handleChange}
    options={options}
  />
);
  }
}





// import React, { useState } from "react";
// import Select from "react-select";

// const options = [
//   { value: "10", label: "10" },
//   { value: "20", label: "20" },
//   { value: "40", label: "40" },
// ];

// const ChooseAmount = () => {
//   const [selectedOption, setSelectedOption] = useState(10);
//   const handleChange = (selectedOption) => {
//     setSelectedOption({ selectedOption });
//     console.log(`Option selected:`, selectedOption);
//   };

//   return (
//     <>
//       <Select value={selectedOption} onChange={handleChange} options={options} />
//     </>
//   );
// };

// export default ChooseAmount;
