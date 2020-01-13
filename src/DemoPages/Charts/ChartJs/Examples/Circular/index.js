import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import BarLineTec from '../BarLineTec';
import DoughnutTec from '../DoughnutTec';
import LineTec from '../LineTec';
//import MapUser from '../MapUser';

//import Select from "react-dropdown-select";
//import {Button, Dropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
//import PieExample from '../pie';
//import DynamicDoughnutExample from '../dynamicDoughnut';
//import RadarExample from '../radar';
//import PolarExample from '../polar';
import { listTypeTechnologies } from "./../data/listTypeTechnologies";
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

export default class ChartJsCircular extends React.Component {

        constructor(props) {
        super(props);


        this.state = {
          value: listTypeTechnologies[0].Description,
          loading: false,
        };
    }
     onFirstSelect = e => {
        const value = e.target.value;
        this.setState(
          {
            value,
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
                    <div>

                    <Row>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <Row>
                                        <Col lg="5">
                                            <div className="App">
                                            <p>Selecciona Tema</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="5">
                                            <div className="App">
                                              <select onChange={this.onFirstSelect} defaultValue={this.state.value}>
                                                {listTypeTechnologies.map(d => <option value={d.Description}>{d.Description}</option>)}
                                              </select>
                                            </div>

                                        </Col>
                                     </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="11">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Las tecnologías más populares en Stack overflow  (Octubre 2018 to Septiembre 2019)</CardTitle>
                                    <div>
                                        <BarLineTec  selectValues={this.state.value} />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="5">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Las 10 tecnologías más populares en Stack overflow</CardTitle>
                                        <div>
                                            <DoughnutTec selectValues={this.state.value} />
                                        </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="7">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Las 10 tecnologías más populares en Stack overflow (Octubre 2018 to Septiembre 2019) </CardTitle>
                                        <div >
                                            <LineTec selectValues={this.state.value}   />
                                        </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    </div>

                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
