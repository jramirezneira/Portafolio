import React, { Component } from 'react';
import { Line, Bar } from "react-chartjs-2";
import { dataSummaryByTime } from "./data/dataSummaryByTime";
import { listTypeTechnologiesByType } from "./data/listTypeTechnologiesByType";


const options= {
        legend: {
            display: true,
            responsive: true,
            position:"bottom",
            boxWidth:1000
        }
    }

export default class LineTec extends Component
{
 constructor(props) {
      super(props);
      this.state = {
        DataByTec: {}
      }
    }


  render() {

    let height= "";
    let currentHideNav = (window.innerWidth <= 760);
    if (currentHideNav !== this.state.hideNav) {
        if(currentHideNav)
            height= 400;
        else
            height=  200;
    }


   let filter="Todos";
    this.props.selectValues.forEach(element => {
        filter= element.Description;

    });




    let datainput= []
    Object.values(dataSummaryByTime).map(val => {
        Object.values(val).map(val1 => {
            //console.log(val1);
            if (val1.Description == filter  )
            {

                datainput.push({"label":val1.tec, "data": val1.data, "type": "line", "lineTension": 0.3,
                                "borderColor": val1.borderColor, "backgroundColor": val1.backgroundColor,
                                "borderCapStyle": "butt", "borderDashOffset": 0.5,"borderJoinStyle": "miter",
                                "pointBorderColor": "rgba(255,105,145,0.6)",
                                  "pointBackgroundColor": "rgb(255, 255, 255)",
                                  "pointBorderWidth": 0,
                                  "pointHoverRadius": 0,
                                  "pointHoverBackgroundColor": "rgb(0, 0, 0)",
                                  "pointHoverBorderColor": "rgba(220, 220, 220,1)",
                                  "pointHoverBorderWidth": 1,
                                  "pointRadius": 3,
                                  "pointHitRadius": 5,"borderWidth":1});
            }
        })
      })



    let data= {
          "labels": [ "October 2018", "November 2018", "December 2018", "January 2019", "February 2019", "March 2019", "April 2019", "May 2019", "June 2019", "July 2019", "August 2019" , "September 2019"],
          "datasets": datainput
        }



    return (
            <Line data={data} options={options} height={height} />
    );
  }
}

