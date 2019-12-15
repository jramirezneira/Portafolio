import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactWordcloud from 'react-wordcloud';
import { Resizable } from 're-resizable';


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


export default class WordCloudExample extends Component
{

 constructor(props) {
      super(props);
      this.state = {
        words: require('./data/words.json')


      }
    }



  render() {


/*
 let filter="language";
    this.props.selectValuesType.forEach(element => {
        filter= element.type;

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
 data = this.state.words.filter(l => l.type== filter);

 if (filterTec !="Todos")
    data = data.filter(l => l.tec== filterTec);

 if (filterLabel !="Todos")
    data = data.filter(l => l.label== filterLabel);



*/



    let width= 400;
    let height= 450;
    let currentHideNav = (window.innerWidth <= 760);
    if (currentHideNav !== this.state.hideNav) {
        if(currentHideNav)
        {
            width= 380;
            height= 337;
        }

    }
   // console.log(height);

    return (
    <div>
      <Resizable
        defaultSize={{
          width: {width},
          height: {height},
        }} style={resizeStyle}
        >

          <ReactWordcloud options={options}  words={this.props.dataWords}   />

      </Resizable>
    </div>
    );
  }
}

