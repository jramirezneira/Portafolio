import React, { Component } from 'react';
import { Doughnut } from "react-chartjs-2";
import { dataSummary } from "./data/dataSummary";

export default class DoughnutTec extends Component
{
 constructor(props) {
      super(props);
      this.state = {
        DataByTec: {}
      }
    }

  render() {

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

   data.slice(0, 10).forEach(element => {
    description.push(element.tec);
    sum.push(element.id);
    view.push(element.view);
  });

   let DataByTec=   {
                  labels: description,
                  datasets:[
                     {
                        label:"RFM",
                        data: view,
                        backgroundColor:[
                         "rgba(255,105,145,0.6)",
                         "rgba(44, 159, 175)",
                         "rgba(155,100,210,0.6)",
                         "rgba(90,178,255,0.6)",
                         "rgba(240,134,67,0.6)",
                         "rgba(250,55,197,0.6)",
                         "rgba(255, 64, 61)",

                         "rgba(246, 194, 62)",
                         "rgba(46, 89, 217)",
                         "rgba(23, 166, 115)",
                         "rgba(120,120,120,0.6)"
                      ]
                     }
                  ]
                }


  const options= {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(90,90,200)",
          titleFontColor: '#FFFFFF',
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,

        },
        legend: {
            position: 'left',
          display: true
        },
        cutoutPercentage: 60,
      }

    return (
            <Doughnut data={DataByTec} options={options} height={300} />
    );
  }
}

