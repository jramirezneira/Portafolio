import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CoocurrenceGraphExample from '../CoocurrenceGraphExample';
import { listNewspaper } from "./../data/listNewspaper";
import {Button, Dropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import Select from "react-dropdown-select";
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
              loading: false,
              contentRenderer: true,
              dropdownRenderer: true,
              inputRenderer: true,
              itemRenderer: true,
              optionRenderer: true,
              noDataRenderer: false,
              selectValuesType: listNewspaper,
              selectValuesTo: [],
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
              closeOnSelect: true,
              dropdownPosition: "bottom",
              direction: "ltr",
              dropdownHeight: "300px",


        };




    }
    setValuesType = selectValuesType => this.setState({ selectValuesType });
    setValuesTo = selectValuesTo => this.setState({ selectValuesTo });





    render() {


    //console.log(this.state.selectValuesType);

    let jsonNodeTo=[];

    if (this.state.selectValuesType != undefined)
        jsonNodeTo = require("./../data/Nodesto_"+ this.state.selectValuesType[0].Description +".json");//.filter(l => l.Description== this.state.selectValuesType[0].Description);
    else
        jsonNodeTo=require("./../data/Nodesto_"+ listNewspaper[0].Description +".json");


   /*let data=  {}
   if(filter=="All")
        data = listTypeTechnologiesByType;
   else
        data = listTypeTechnologiesByType.filter(l => l.Description== filter);
*/


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
                                    <Col lg="5">
                                        <p className="text-primary">Diario</p>

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
                                              values={[listNewspaper.find(opt => opt.Description === listNewspaper[0].Description)]}
                                              labelField={"Description"}
                                              valueField={"Description"}
                                              options={listNewspaper}
                                              dropdownGap={5}
                                              keepSelectedInList={this.state.keepSelectedInList}
                                              onDropdownOpen={() => undefined}
                                              onDropdownClose={() => undefined}
                                              onClearAll={() => undefined}

                                              onChange={values => this.setValuesType(values)}

                                                />
                                                 <br></br>

                                        </Col>
                                        <Col><p className="text-primary">Entidad</p>
                                        <Select
                                                id="id1"
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
                                              values={[jsonNodeTo.find(opt => opt.to === jsonNodeTo[0].to)]}
                                             //  values={{ label: "PP", value: "PP" }}
                                              labelField={"to"}
                                              valueField={"to"}
                                              options={jsonNodeTo}
                                              dropdownGap={0}
                                              keepSelectedInList={this.state.keepSelectedInList}
                                              onDropdownOpen={() => undefined}
                                              onDropdownClose={() => undefined}
                                              onClearAll={() => undefined}

                                              onChange={values => this.setValuesTo(values)}

                                                />
                                        </Col>

                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                    <Row>
                        <Col lg="9">


                           <CoocurrenceGraphExample selectValuesTo={this.state.selectValuesTo} selectValuesType={this.state.selectValuesType}  />

                        </Col>
                    </Row>



                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
