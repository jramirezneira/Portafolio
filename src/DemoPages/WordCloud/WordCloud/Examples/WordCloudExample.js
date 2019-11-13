import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Resizable } from 're-resizable';
import { words } from "./data/words";
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';





export default class WordCloudExample extends Component
{

    constructor(props) {
      super(props);
      this.state = {
        dataSpacy: {},

      }
    }



  render() {



 let filter="Lenguaje de programación";
    this.props.selectValuesType.forEach(element => {
        filter= element.Description;

    });

 let filterTec="Todos";
    this.props.selectValuesTec.forEach(element => {
        filterTec= element.tec;

    });

 let filterLabel="Todos";
    this.props.selectValuesLabels.forEach(element => {
        filterLabel= element.text;

    });


 let data={};
 data = words.filter(l => l.Description== filter);

 if (filterTec !="Todos")
    data = data.filter(l => l.tec== filterTec);

 if (filterLabel !="Todos")
    data = data.filter(l => l.label== filterLabel);



   const resizeStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
};


const options = {
  colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
  enableTooltip: true,
  deterministic: false,
  fontFamily: 'impact',
  fontSizes: [5, 70],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 1,
  rotations: 3,
  rotationAngles: [-30, 30],
  scale: 'sqrt',
  spiral: 'archimedean',
  transitionDuration: 1000,
};

    return (
    <div>
      <TagCloud
        style={{
          fontFamily: 'sans-serif',
          fontSize: 30,
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: () => randomColor(),
          padding: 5,
          width: '100%',
          height: '100%'
        }}>
        <div style={{fontSize: 50}}>react</div>
        <div style={{color: 'green'}}>tag</div>
        <div rotate={90}>cloud</div>

      </TagCloud>
    </div>
    );
  }
}

