import React, { 
  useState, 
  useEffect 
} from "react";
import Dropdown from "../Dropdown/Dropdown";
// import DropdownButton from 'react-bootstrap/DropdownButton';
import '../../Settings/settings.css';

const FirstTab = () => {
  /* const [selectedTime, setSelectedTime] = useState(JSON.parse(window.localStorage.getItem('time')));
  const [selectedDataAggregation, setSelectedDataAggregation] = useState(JSON.parse(window.localStorage.getItem('DataAggregation')));
  const [selectedRefreshRate, setSelectedRefreshRate] = useState(JSON.parse(window.localStorage.getItem('RefreshRate'))); */

  const [selectedTime, setSelectedTime] = useState("Choose One");
  const [selectedDataAggregation, setSelectedDataAggregation] = useState("Choose One");
  const [selectedRefreshRate, setSelectedRefreshRate] = useState("Choose One");
  
  console.log('time2:', (window.localStorage.getItem('time')))
  console.log('DataAggregation2:', (window.localStorage.getItem('DataAggregation')))
  console.log('RefreshRate2:', (window.localStorage.getItem('RefreshRate')))
  // console.log('selectedTime:', selectedTime)
  // console.log('selectedDataAggregation:', selectedDataAggregation)
  // console.log('selectedRefreshRate:', selectedRefreshRate)
  useEffect(() => {
    setSelectedTime((window.localStorage.getItem('time')));
    setSelectedDataAggregation((window.localStorage.getItem('DataAggregation')));
    setSelectedRefreshRate((window.localStorage.getItem('RefreshRate')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('time', selectedTime);
  }, [selectedTime]);
  useEffect(() => {
    window.localStorage.setItem('DataAggregation', selectedDataAggregation);
  }, [selectedDataAggregation]);
  useEffect(() => {
    window.localStorage.setItem('RefreshRate', selectedRefreshRate);
  }, [selectedRefreshRate]);  

  return (
    <div className="FirstTab">
      <Dropdown selected={selectedTime} setSelected={setSelectedTime} options={["None"]} label={"Project Name"} />
      <Dropdown selected={selectedDataAggregation} setSelected={setSelectedDataAggregation} options={["None"]} label={"Project ID"} />
      <Dropdown selected={selectedRefreshRate} setSelected={setSelectedRefreshRate} options={["None"]} label={"Qty of People"} />
      <Dropdown selected={selectedRefreshRate} setSelected={setSelectedRefreshRate} options={["None"]} label={"Deadline"} />
      <Dropdown selected={selectedRefreshRate} setSelected={setSelectedRefreshRate} options={["None"]} label={"Skills"} />
      {/* <span>{selectedTime}</span> <br/>
      <span>{selectedDataAggregation}</span> <br/>
      <span>{selectedRefreshRate}</span> */}
    </div>
  );
};

export default FirstTab;