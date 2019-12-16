import React, { Component } from 'react';
import { Line, Bar } from "react-chartjs-2";
import { dataSummary } from "./data/dataSummary";



const options= {
        legend: {
            display: true,
            responsive: true,
            position:"bottom"
        }
    }


export default class BarLineTec extends Component
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
            height= 300;
        else
            height=  100;
    }

    let filter="Todos";


    this.props.selectValues.forEach(element => {
        filter= element.Description;

    });

   let data=  {}

   if(filter=="Todos")
        data = dataSummary;
   else
        data = dataSummary.filter(l => l.Description== filter);


   let description = [];
   let sum = [];
   let view = [];
   data.forEach(element => {
    description.push(element.tec);
    sum.push(element.count);
    view.push(element.view);
  });

  let DataByTec= {
  labels: description,
  datasets: [

	{
	  label: "Cantidad de Post",
	  fill: false,
	   type: "line",
	  lineTension: 0.3,
	  backgroundColor: "rgba(184, 185, 210, .1)",
	  borderColor: "rgb(240,134,67, 0.8)",
	  borderCapStyle: "butt",
	  borderDash: [],
	  borderDashOffset: 0.0,
	  borderJoinStyle: "miter",
	  pointBorderColor: "rgb(240,134,67)",
	  pointBackgroundColor: "rgb(255, 255, 255)",
	  pointBorderWidth: 6,
	  pointHoverRadius: 5,
	  pointHoverBackgroundColor: "rgb(0, 0, 0)",
	  pointHoverBorderColor: "rgba(220, 220, 220, 1)",
	  pointHoverBorderWidth: 2,
	  pointRadius: 1,
	  pointHitRadius: 10,
	  data: sum
	},
	{
	  label: "Cantidad de Vistas",
	   type: "bar",
	  fill: true,
	  lineTension: 0.3,
	  backgroundColor: "rgba(46, 89, 217, .8)",
	  borderColor: "rgb(46, 89, 217)",
	  borderCapStyle: "butt",
	  borderDash: [],
	  borderDashOffset: 0.0,
	  borderJoinStyle: "miter",
	  pointBorderColor: "rgb(205, 130,1 58)",
	  pointBackgroundColor: "rgb(255, 255, 255)",
	  pointBorderWidth: 10,
	  pointHoverRadius: 5,
	  pointHoverBackgroundColor: "rgb(0, 0, 0)",
	  pointHoverBorderColor: "rgba(220, 220, 220,1)",
	  pointHoverBorderWidth: 2,
	  pointRadius: 1,
	  pointHitRadius: 10,
	  data: view
	}
  ]
}



    return (
            <Bar data={DataByTec} options={options}   height={height} />
    );
  }
}

