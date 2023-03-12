import axios from 'axios';
import CsvDownloadButton from 'react-json-to-csv'
import Dropdown from "../components/Dropdown/Dropdown";
import {
  BsLightningFill,
  BsSun,

} from 'react-icons/bs';
import {
  GiPowerGenerator,
  // GiTrafficLightsOrange
} from 'react-icons/gi';
import {
  FaPlug
} from 'react-icons/fa';
import {
  Button,
  // Center,
  Flex,
  Text,
  // Heading,
  // Image,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  // Tooltip,
  Tr,
  // usePanGesture,
  Select,
  NumberInput,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  NumberInputField,
  // grid,
  // flexbox,
} from "@chakra-ui/react";
// import setup from "../setup.json";
import { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import Xarrow, {
  // useXarrow, 
  Xwrapper
} from 'react-xarrows';
// import Draggable from 'react-draggable';

const PageSummary = {
  display: 'grid',
  justifyContent: 'space-evenly',
  gridTemplateColumns: '70% 30%',
  // backgroundColor: 'black',
}

const FirstPageSummary = {
  display: 'grid',
  justifyContent: 'right',
  // justifyContent: 'space-evenly',
  width: '100%',
  // backgroundColor: 'red',
  gridTemplateColumns: 'repeat(3, 30%)',
  alignItems: 'center',
}

const SecondPageSummary = {
  display: 'grid',
  // justifyContent: 'center',
  width: '100%',
  // backgroundColor: 'blue',
  // gridTemplateColumns: 'repeat(1, 25%%)',
  gridTemplateRows: 'repeat(2, 25%)',
  // alignItems: 'center',
  // marginLeft: '10px',
}

const secondValueStyle = {
  justifyContent: 'right',
}

const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "5px",
  width: "250px",
  display: 'flex',
  FlexDirection: 'column',
  justifyContent: 'space-evenly',
  margin: '50px 0px 50px 0px',
};

const boxStyleLonger = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "5px",
  width: "300px",
  display: 'flex',
  FlexDirection: 'column',
  justifyContent: 'space-evenly',
  margin: '50px 0px auto 0px',
};

const headerSummary = {
  // backgroundColor: 'grey',
  width: '100%',
}

const header = {
  // backgroundColor: 'pink',
  // borderBottom: "1px solid #ddd",
  padding: "10px 15px 10px 0px",
  borderRadius: "0 4px 0 0",
  fontSize: "16px",
  fontWeight: "500",
  color: "#333",
  marginTop: "0",
  marginBottom: "0",
  display: 'grid',
  gridTemplateColumns: '60% 40%',
}

const icon = {
  // backgroundColor: "#000000",
  margin: "0",
  padding: "12px 0px 50px 10px",
  width: "20%",
}

const summary = {
  // backgroundColor: 'lightblue',
  font: 'bold 30px arial,serif',
  letterSpacing: "0px",
  borderRadius: "0 0 4px 0",
  padding: "10px 15px 10px 0px",

}

const NormalBox = ({ id, value, logo, status = '', second_value = `` }) => {
  return (
    <div id={id} style={boxStyle} value={value} logo={logo}>
      <div className='icon' style={icon}>{logo}</div>
      <div className='headerSummary' style={headerSummary}>
        <div className='header' style={header}>
          <span>{id}</span>
          <span style={{ secondValueStyle }}>{second_value}</span>
        </div>
        <div style={{
          fontStyle: 'italic',
          fontSize: '12px',
          textAlign: 'justify',
          padding: '10px 20px 10px 0px'
        }}>{status}</div>
        <div className='summary' style={summary}>{value}</div>
      </div>
      {/* <div className='chart'>chart</div> */}
    </div>
  );
};

const NormalBoxLonger = ({ id, value, logo }) => {
  return (
    <div id={id} style={boxStyleLonger} value={value} logo={logo}>
      <div className='icon' style={icon}>{logo}</div>
      <div className='headerSummary' style={headerSummary}>
        <div className='header' style={header}>{id}</div>
        <div className='summary' style={summary}>{value}</div>
      </div>
      {/* <div className='chart'>chart</div> */}
    </div>
  );
};

function aggregateValue(array, keyword = '', aggregation = 'Average') {
  let ret = 0;
  let count = 0;
  let arr = []
  for (let i = 0; i < array.length; i++) {
    for (const key in array[i].data.assets_params) {
      if (key === keyword) {
        ret += array[i].data.assets_params[key];
        count += 1;
        arr.push(array[i].data.assets_params[key]);
      }
    }
  }
  if (aggregation === 'Average') {
    console.log('average:', (ret / count).toFixed(2));
    return (ret / count).toFixed(2);
  }
  else if (aggregation === 'Sum') {
    console.log('Sum:', ret.toFixed(2));
    return ret.toFixed(2);
  }
  else if (aggregation === 'Count') {
    console.log('Count:', count);
    return count;
  }
  else if (aggregation === 'Max') {
    console.log('Max:', Math.max(...arr).toFixed(2));
    return Math.max(...arr).toFixed(2);
  }
  else if (aggregation === 'Min') {
    console.log('Min:', Math.min(...arr).toFixed(2));
    return Math.min(...arr).toFixed(2);
  }
  else {
    console.log('Else case:', (ret / count).toFixed(2));
    return (ret / count).toFixed(2);
  }
}

const Logdata = () => {
  const [token, setToken] = useState("token");

    // logged in based on table number or user ID
  //   useEffect(() => {
  // }, [userName]);

  // create a loading function to take care of the loading state
  const [loading, setLoading] = useState(false);
  const loadingTime = (time) => {
    setLoading(true);
    setTimeout(() => setLoading(false), time);
  }

  return (
    <div className="content">
        <div className="title"> Summary </div>
          <br/><br/>
        <div className="page-content">
        This page is supposed to be logged in to a user account and show their progress as well as their daily tasks to be done
          <br/><br/>
        </div>
      </div>
  );

 
}


export default Logdata;