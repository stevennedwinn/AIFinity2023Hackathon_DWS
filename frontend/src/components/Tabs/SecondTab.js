import Dropdown from "../Dropdown/Dropdown";
import React, { useState } from "react";
import '../../Settings/settings.css';
//import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const SecondTab = () => {
  const [activeSubTab, setActiveSubTab] = useState('Relative');

  function onChangeValue(event) {
    setActiveSubTab(event.target.value);
    // console.log(event.target.value);
  }

  return (
    <div className="dropdown">
      To be implemented
    </div>
  );
};

const Relative = () => {
  const [selected1, setSelected1] = useState("Choose One");
  const options1 = ["None (Default: 2 hours)", "30 minutes", "2 hours", "12 hours", "1 Day", "7 Days", "30 Days"];
  const [selected2, setSelected2] = useState("Choose One");
  const options2 = ["None", "Min", "Max", "Average", "Sum", "Count"];

  return (
    <div>
      
    {/* //   <Dropdown selected={selected1} setSelected1={setSelected1} options={options1} label={"Last"}/>
    //   <Dropdown selected={selected2} setSelected={setSelected2} options={options2} label="Data Aggregation Function" /> */}
      {/* {selected} */}
    </div>
  );
};

const Absolute = () => {
  const [selected1, setSelected1] = useState("Choose One");
  const options1 = ["None", "Min", "Max", "Average", "Sum", "Count"];

  return (
    <div>
      <div className="absolute-date">
        <label>From</label>
        <input id="From" type="date" placeholder="From" required={true} />
        <label>To</label>
        <input id="From" type="date" placeholder="From" required={true} />
      </div>
      <Dropdown selected={selected1} setSelected1={setSelected1} options={options1} label="Data Aggregation Function"/>
    </div>
  );

};

export default SecondTab;
