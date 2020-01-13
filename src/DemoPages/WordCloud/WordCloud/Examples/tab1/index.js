import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import WordCloudExample from '../WordCloudExample';
import TableExample from '../TableExample';
import Select from "react-dropdown-select";

import { listTypeTechnologies } from "./../data/listTypeTechnologies";
import { listTypeTechnologiesByType } from "./../data/listTypeTechnologiesByType";
import { labels } from "./../data/labels";

import {Button, Dropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

export default class ChartJsCircular extends React.Component {

        constructor(props) {
        super(props);
            this.state = {
                words: require('./../data/words.json'),

          value: listTypeTechnologies[0].type,
          value2: listTypeTechnologiesByType.filter(l => l.type== listTypeTechnologies[0].type)[0].tec,
          value3: labels[0].text,
          loading: false,
          jsonNodeTo: listTypeTechnologiesByType.filter(l => l.type== listTypeTechnologies[0].type)
         // jsonNodeTo:todos.concat(require("./../data/Nodesto_"+ listNewspaper[0].label +".json"))
        };



    }



     onFirstSelect = e => {
        const value = e.target.value;

        let jsonNodeTo=[];
        jsonNodeTo = listTypeTechnologiesByType.filter(l => l.type== value);
        this.setState(
          {
            loading: true,
            value: value,
          },
          //call the api and
          () => {
            this.setState({
              loading: false,
              jsonNodeTo,
              value2: jsonNodeTo[0].tec
            });
          }
        );
      };
      onSecondSelect = e => {
        const value2 = e.target.value;

        this.setState(
          {
            value2,
          }
          //call the api and

        );
      };
       onThirdSelect = e => {
        const value3 = e.target.value;

        this.setState(
          {
            value3,
          }
          //call the api and

        );
      };



    render() {






     let dataWords={};
     dataWords = this.state.words.filter(l => l.type== this.state.value);

    if (this.state.value2 != "Todos")
        dataWords = dataWords.filter(l => l.tec== this.state.value2);
    console.log(dataWords);

    if(this.state.value3 != "All")
     dataWords = dataWords.filter(l => l.label== this.state.value3);




        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Row>
                    <Col lg="9">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <Row>
                                    <Col lg="12">
                                        <div className="App">
                                        <p>Selecciona Tema, tecnología y tipo de entidad</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="12">

                                         { !this.state.loading && (
                                                <div className="App">
                                                  <select onChange={this.onFirstSelect} defaultValue={this.state.value}>
                                                    {listTypeTechnologies.map(d => <option value={d.type}>{d.Description}</option>)}
                                                  </select>
                                                  <select onChange={this.onSecondSelect}>
                                                    {this.state.jsonNodeTo.map(d => <option value={d.tec}>{d.tec}</option>)}
                                                  </select>
                                                  <select onChange={this.onThirdSelect}>
                                                    {labels.map(d => <option value={d.text}>{d.value}</option>)}
                                                  </select>
                                                </div>
                                              )}


                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                    <Row>
                        <Col lg="9">
                            <Card className="main-card mb-1">
                                <CardBody>
                                    <CardTitle>Wordcloud</CardTitle>

                                        <Row>
                                            <Col lg="7">
                                                <WordCloudExample dataWords={dataWords}   />
                                            </Col>
                                            <Col lg="5">
                                                 <TableExample dataWords={dataWords}  />
                                            </Col>
                                        </Row>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>



                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
