import React, { Component } from 'react';
import { VectorMap  } from "react-jvectormap";

import { listTecByCountry } from "./data/listTecByCountry";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";




export default class MapUser extends Component
{
 constructor(props) {
      super(props);
        this.state = {
        countriesCodesArray: [],
        countriesNamesArray: [],
        data: {},
        title: "",
        titleSet: false,
        color: "#48aeef"
  };

    }

   render() {

    let dataIni={}
    let mapData={}

    let filterType="Todos";
    this.props.selectValuesType.forEach(element => {
        filterType= element.Description;
    });
    //Object.values(listTecByCountry).map(val => {

       /* Object.values(val).map(val1 => {
            if (val1.Description == filterType  )
            {
                dataIni=val1;
            }

        })*/
    //})

    dataIni = Object.values(listTecByCountry[0]).filter(l => l.Description== filterType);

    let filterTec="Todos";
    this.props.selectValuesTec.forEach(element => {
        filterTec= element.tec;
    });
    //Object.values(dataIni).filter(l => l.tec== "python");

   // console.log(Object.values(dataIni).filter(l => l.tec== filterTec));



   // Object.values(mapData).map(val => {
        Object.values(dataIni).map(val1 => {
            if (val1.tec == filterTec  )
            {
                mapData=val1.data;
            }

        })
   // })
    //console.log(mapData);

     const handleClick = (e, el, countryCode) => {
     return  el.html(el.html() + " Users: " + mapData[countryCode]);
    };






  return (

      <VectorMap
          map={"world_mill"}
          backgroundColor="transparent" // change it to ocean blue: #0077be
          zoomOnScroll={false}
          containerStyle={{
            width: "200px",
            height: "540px"
          }}
          onRegionClick={this.handleClick} // gets the country code
          containerClassName="map"

        regionStyle={{
            initial: {
              fill: "#F9F9FD",
              "fill-opacity": 1,
              stroke: '#000',
              "stroke-width": 0.5,
              "stroke-opacity": 1
            },
            hover: {
              "fill-opacity": 0.5,
              cursor: "pointer"
            },
            selected: {
              fill: "#2938bc", // color for the clicked country
              "fill-opacity": 0.1
            },
            selectedHover: {}
          }}




        series={{
          regions: [
            {


              scale: ['#E8EDFD', '#112151'], //your color game's here
              normalizeFunction: "polynomial",
              legend: {
                  vertical: true
                },
              values: mapData //this is your data
            }
          ]
        }}
        onRegionTipShow={handleClick} //gets the country code


      />

  );



  }



}

