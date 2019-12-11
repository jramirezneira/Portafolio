import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import BarLineTec from '../BarLineTec';
import DoughnutTec from '../DoughnutTec';
import LineTec from '../LineTec';
//import MapUser from '../MapUser';

import Select from "react-dropdown-select";
import {Button, Dropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
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
            dropdownOpen: false,
             multi: false,
                  disabled: false,
                  loading: true,
                  contentRenderer: false,
                  dropdownRenderer: false,
                  inputRenderer: false,
                  itemRenderer: false,
                  optionRenderer: false,
                  noDataRenderer: false,
                  selectValues: [],
                  searchBy: "username",
                  clearable: false,
                  searchable: true,
                  create: false,
                  separator: false,
                  forceOpen: false,
                  handle: true,
                  addPlaceholder: "",
                  color: "#0074D9",
                  keepSelectedInList: true,
                  closeOnSelect: false,
                  dropdownPosition: "bottom",
                  direction: "ltr",
                  dropdownHeight: "300px"

        };
    }

     setValues = selectValues => this.setState({ selectValues });


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
                                        <Col lg="12">
                                            <p className="text-primary">Ámbito de la tecnología</p>

                                            <Select
                                                placeholder="Select peoples"
                                              addPlaceholder={this.state.addPlaceholder}
                                              color={this.state.color}
                                              disabled={this.state.disabled}
                                              loading={this.state.loading}
                                              searchBy={this.state.searchBy}
                                              separator={this.state.separator}
                                              clearable={this.state.clearable}
                                              searchable={this.state.searchable}
                                              create={this.state.create}
                                              keepOpen={this.state.forceOpen}
                                              dropdownHandle={this.state.handle}
                                              dropdownHeight={this.state.dropdownHeight}
                                              direction={this.state.direction}
                                              multi={this.state.multi}
                                              values={[listTypeTechnologies.find(opt => opt.Description === "Todos")]}
                                              labelField={"Description"}
                                              valueField={"Description"}
                                              options={listTypeTechnologies}
                                              dropdownGap={5}
                                              keepSelectedInList={this.state.keepSelectedInList}
                                              onDropdownOpen={() => undefined}
                                              onDropdownClose={() => undefined}
                                              onClearAll={() => undefined}

                                              onChange={values => this.setValues(values)}
                                              noDataLabel="No matches found"
                                              closeOnSelect={this.state.closeOnSelect}
                                              noDataRenderer={
                                                this.state.noDataRenderer
                                                  ? () => this.noDataRenderer()
                                                  : undefined
                                              }
                                              dropdownPosition={this.state.dropdownPosition}
                                              itemRenderer={
                                                this.state.itemRenderer
                                                  ? (item, itemIndex, props, state, methods) =>
                                                      this.itemRenderer(item, itemIndex, props, state, methods)
                                                  : undefined
                                              }
                                              inputRenderer={
                                                this.state.inputRenderer
                                                  ? (props, state, methods) =>
                                                      this.inputRenderer(props, state, methods)
                                                  : undefined
                                              }
                                              optionRenderer={
                                                this.state.optionRenderer
                                                  ? (option, props, state, methods) =>
                                                      this.optionRenderer(option, props, state, methods)
                                                  : undefined
                                              }
                                              contentRenderer={
                                                this.state.contentRenderer
                                                  ? (innerProps, innerState) =>
                                                      this.contentRenderer(innerProps, innerState)
                                                  : undefined
                                              }
                                              dropdownRenderer={
                                                this.state.dropdownRenderer
                                                  ? (innerProps, innerState, innerMethods) =>
                                                      this.dropdownRenderer(
                                                        innerProps,
                                                        innerState,
                                                        innerMethods
                                                      )
                                                  : undefined
                                              }
                                                />

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
                                        <BarLineTec  selectValues={this.state.selectValues} />
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
                                            <DoughnutTec selectValues={this.state.selectValues} />
                                        </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="7">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Las 10 tecnologías más populares en Stack overflow (Octubre 2018 to Septiembre 2019) </CardTitle>
                                        <div >
                                            <LineTec selectValues={this.state.selectValues}   />
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
