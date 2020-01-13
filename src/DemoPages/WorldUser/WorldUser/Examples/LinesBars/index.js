import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MapUser from '../MapUser';
import { listTypeTechnologies } from "./../data/listTypeTechnologies";
import { listTypeTechnologiesByType } from "./../data/listTypeTechnologiesByType";
import Select from "react-dropdown-select";
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

let todos= [{"Description":"Todos"}];
let jsonNodeFrom=todos.concat(listTypeTechnologies);//todos.concat(require("./../data/Nodesto_"+ listNewspaper[0].label +".json"))


let todos2= [{"Description":"Todos","tec":"Todos"}];
//let jsonNodeTo=todos2.concat(listTypeTechnologiesByType);//todos.concat(require("./../data/Nodesto_"+ listNewspaper[0].label +".json"))



export default class ChartJsLinesBars extends React.Component {
    constructor(props) {
        super(props);


        this.state = {

              value: jsonNodeFrom[0].Description,
              value2: todos2.concat(listTypeTechnologiesByType).filter(l => l.Description== jsonNodeFrom[0].Description)[0].tec,
              jsonNodeTo:todos2.concat(listTypeTechnologiesByType),
              loading: false,

        };
    }

    onFirstSelect = e => {
        const value = e.target.value;
       // console.log(jsonNodeTo);//.filter(l => l.Description== value));

        let jsonNodeTo=[];

        if(value=="Todos")
        {
            //jsonNodeTo = listTypeTechnologiesByType;
            jsonNodeTo =todos2;//.concat(jsonNodeTo);
        }
        else
            jsonNodeTo = listTypeTechnologiesByType.filter(l => l.Description== value);
       // jsonNodeTo = todos2.concat(jsonNodeTo);
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
                    transitionLeave={false}>
                <Row>
                    <Col lg="8">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <Row>
                                    <Col lg="8">
                                        <p className="text-primary">Tipo de tecnología</p>
                                        { !this.state.loading && (
                                            <div className="App">
                                              <select onChange={this.onFirstSelect} defaultValue={this.state.value}>
                                                {jsonNodeFrom.map(d => <option value={d.Description}>{d.Description}</option>)}
                                              </select>
                                              <select onChange={this.onSecondSelect}>
                                                {this.state.jsonNodeTo.map(d => <option value={d.tec}>{d.tec}</option>)}
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
                        <Card className="main-card ml-2 mr-2">
                            <CardBody>
                                 <CardTitle>   {this.state.value2=="Todos" ? ('Total de usuarios(as) en el mundo') : ("Total usuarios(as) "+ this.state.value + " : "+this.state.value2)}</CardTitle>

                                 <MapUser  selectValuesTec={this.state.value2} selectValuesType={this.state.value} />

                            </CardBody>
                        </Card>

                    </Col>
                </Row>

                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
