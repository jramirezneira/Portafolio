import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Resizable } from 're-resizable';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';





export default class TableExample extends Component
{

 constructor(props) {
      super(props);
      this.state = {
        words: require('./data/words.json')


      }
    }



  render() {



 let filter="language";
    this.props.selectValuesType.forEach(element => {
        filter= element.type;

    });
 console.log(filter);
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



    return (
     <BootstrapTable  wrapperClasses="table-responsive" data={data}  pagination   striped={true} hover={true} condensed= {true} search={true} >

            <TableHeaderColumn dataField="text" isKey={true}  dataSort={ true } width={'100px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >Entidad</TableHeaderColumn>
            <TableHeaderColumn dataField="value" dataSort={ true } width={'100px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >Cantidad Post</TableHeaderColumn>

      </BootstrapTable>
    );
  }
}

