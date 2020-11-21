// import React from 'react';
// import Select from "react-select";

// const options = [
//   { value: "10", label: "10" },
//   { value: "20", label: "20" },
//   { value: "40", label: "40" },
// ];

// export default class ChooseAmount extends React.Component {
//   state = {
//     selectedOption: null,
//   };
// handleChange = selectedOption => {
//   this.setState({ selectedOption });
//   console.log(`Option selected:`, selectedOption);
// };
//   render() {
//     const { selectedOption } = this.state;

// return (
//   <Select
//     value={selectedOption}
//     onChange={this.handleChange}
//     options={options}
//   />
// );
//   }
// }

// import React, { useState } from "react";
// import Select from "react-select";

// const options = [
//   { value: "10", label: "10" },
//   { value: "20", label: "20" },
//   { value: "40", label: "40" },
// ];

// const ChooseAmount = ({handle}) => {
//   const [selectedOption, setSelectedOption] = useState(10);
//   const handleChange = (e) => {
//     console.log(e)
//     setSelectedOption( e.value );
//     console.log(`Option selected:`, selectedOption.value);
//     handle(selectedOption.value)
//   };
//   return (
//     <>
//       <Select label={selectedOption} value={selectedOption.label} onChange={handleChange} options={options} />
//     </>
//   );
// };

// export default ChooseAmount;

//

import React, { useState } from "react";
import Select from "react-select";

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
    <div>
      <Select value={selectedOption} onChange={handleChange} options={options} />
    </div>
  );
}
