import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CoocurrenceGraphSOExample from '../CoocurrenceGraphSOExample';
//import { listNewspaper } from "./../data/listNewspaper";
import {Button, Dropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import Select from "react-dropdown-select";
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

const type= [{"Description":"Todos"},
                {"Description":"Lenguaje de programación", "type":"language"},
                {"Description":"Front End","type":"Front End"},
                {"Description":"Mobile","type":"mb"},
                {"Description":"Machine Learning","type":"ML"},
                {"Description":"Bases de Datos","type":"Data Base"},
                {"Description":"Framework desarrollo","type":"fw"},
                {"Description":"Cloud","type":"cloud"},
                {"Description":"Sistema operativo","type":"SO"},
                {"Description":"Control de versión","type":"cv"},
                {"Description":"Big Data","type":"bigdata"},
                {"Description":"Redes sociales","type":"socialMedia"},
                {"Description":"Business Intelligence","type":"BI"}];

let todos= [{"to":"Todos"}];
export default class ChartJsCircular extends React.Component {

    constructor(props) {
        super(props);


        let jsonNodeTo=[];
        jsonNodeTo = todos.concat(require("./../data/Nodesto_"+ type[0].Description +".json"));
        //console.log(jsonNodeTo);
        this.state = {
          value: type[0].Description,
          value2: jsonNodeTo[0].to,
          loading: false,
          jsonNodeTo:todos.concat(require("./../data/Nodesto_"+ type[0].Description +".json"))
        };
    }

    onFirstSelect = e => {
        const value = e.target.value;
        let jsonNodeTo=[];
        jsonNodeTo = todos.concat(require("./../data/Nodesto_"+ value +".json"));
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
              value2: jsonNodeTo[0].to
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


    render() {



        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={true}>
                    <Row>
                    <Col lg="10">
                        <Card className="main-card mb-2">
                            <CardBody>
                                <Row>
                                    <Col>
                                        <p className="text-primary">Diario</p>

                                         { !this.state.loading && (
                                            <div className="App">
                                              <select onChange={this.onFirstSelect} defaultValue={this.state.value}>
                                                {type.map(d => <option value={d.Description}>{d.Description}</option>)}
                                              </select>
                                              <select onChange={this.onSecondSelect}>
                                                {this.state.jsonNodeTo.map(d => <option value={d.to}>{d.to}</option>)}
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
                        <Col lg="10">

                            <Card className="main-card mb-1">
                                <CardBody >


                                            <CoocurrenceGraphSOExample selectValuesTo={this.state.value2} selectValuesType={this.state.value}  />

                                </CardBody>
                             </Card>
                        </Col>
                    </Row>



                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
