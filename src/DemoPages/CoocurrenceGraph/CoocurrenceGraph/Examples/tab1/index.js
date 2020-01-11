import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CoocurrenceGraphExample from '../CoocurrenceGraphExample';
import {Button, Dropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import Select from "react-dropdown-select";
import Select1 from 'react-select'
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

const listNewspaper= [{"label":"El diario", "value":"El diario"},{"label":"Público", "value":"Público"},{"label":"Abc", "value":"Abc"},{"label":"La razón", "value":"La razón"}];
let todos= [{"label":"Todos", "value":"Todos"}];

export default class ChartJsCircular extends React.Component {



        constructor(props) {
        super(props);


        let jsonNodeTo=[];
        jsonNodeTo = todos.concat(require("./../data/Nodesto_"+ listNewspaper[0].label +".json"));
        this.state = {
          value: listNewspaper[0].label,
          value2: jsonNodeTo[0].label,
          loading: false,
          jsonNodeTo:todos.concat(require("./../data/Nodesto_"+ listNewspaper[0].label +".json"))
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
              value2: jsonNodeTo[0].label

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
                    <Col lg="9">
                        <Card className="main-card mb-2">
                            <CardBody>
                                <Row>
                                    <Col lg="5">
                                        <p className="text-primary">Ámbito de la tecnología</p>
                                       { !this.state.loading && (
                                            <div className="App">
                                              <select onChange={this.onFirstSelect} defaultValue={this.state.value}>
                                                {listNewspaper.map(d => <option value={d.value}>{d.label}</option>)}
                                              </select>
                                              <select onChange={this.onSecondSelect}>
                                                {this.state.jsonNodeTo.map(d => <option value={d.value}>{d.label}</option>)}
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
                                <CardBody >

                                    <CardTitle className="text-primary">{this.state.value} {this.state.value2}</CardTitle>
                                    <CoocurrenceGraphExample selectValuesTo={this.state.value2} selectValuesType={this.state.value}  />


                                </CardBody>
                             </Card>
                        </Col>
                    </Row>



                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
