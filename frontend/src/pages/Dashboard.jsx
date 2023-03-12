//git-upload
import React from "react";
import Highcharts from "highcharts/highcharts.js";
import highchartsMore from "highcharts/highcharts-more.js"
import solidGauge from "highcharts/modules/solid-gauge.js";
import HighchartsReact from "highcharts-react-official";
// import setup from "../setup.json"; 
import axios from 'axios';
import "../App.css"
highchartsMore(Highcharts);
solidGauge(Highcharts);

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false
    };
  }
  componentDidMount() {
    const url = process.env.REACT_APP_GETNPOST_API;
    axios.get(url)
      .then((response) => {
        //console.log(response)
        this.setState({
          items: response.data,
          DataisLoaded: true
        });
      })
      .catch((error) => {
        console.timeLog(error)
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    // Handle the loading state
    // if (!DataisLoaded){
    //   return (<div className="content no-data"><div className="title">Fetching Data</div></div>);
    // };

    return (
      <div className="content">
        <div className="title"> Dashboard</div>
          <br/><br/>
        <div className="page-content">
          This page is supposed to show project meeting of all the team in the company as well as to show worker score based on how many projects they have done in the period
          <br/><br/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
