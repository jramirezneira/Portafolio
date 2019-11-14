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
            dropdownOpen: false,
             multi: false,
                  disabled: false,
                  loading: false,
                  contentRenderer: false,
                  dropdownRenderer: false,
                  inputRenderer: false,
                  itemRenderer: false,
                  optionRenderer: false,
                  noDataRenderer: false,
                  selectValuesType: [],
                  selectValuesTec: [],
                  selectValuesLabels: [],
                  searchBy: "username",
                  clearable: false,
                  searchable: false,
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

    setValuesType = selectValuesType => this.setState({ selectValuesType });
     setValuesTec = selectValuesTec => this.setState({ selectValuesTec });
     setValuesLabels = selectValuesLabels => this.setState({ selectValuesLabels });



    render() {

    let filter="language";
    this.state.selectValuesType.forEach(element => {
        filter= element.type;
    });

    console.log(this.state.selectValuesType);
  // let data=  listTypeTechnologiesByType.filter(l => l.Description== filter);
    let data=  {}

    data = listTypeTechnologiesByType.filter(l => l.type== filter);


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
                                <Col lg="4">
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
                                          values={[listTypeTechnologies.find(opt => opt.type === "language")]}
                                          labelField={"Description"}
                                          valueField={"type"}
                                          options={listTypeTechnologies}
                                          dropdownGap={5}
                                          keepSelectedInList={this.state.keepSelectedInList}
                                          onDropdownOpen={() => undefined}
                                          onDropdownClose={() => undefined}
                                          onClearAll={() => undefined}

                                          onChange={values => this.setValuesType(values)}


                                            />
                                      <br></br>
                                </Col>
                                <Col lg="4">
                                <p className="text-primary">Tecnología</p>
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
                                  values={[listTypeTechnologiesByType.find(opt => opt.tec === data[0].tec)]}
                                  labelField={this.state.labelField}
                                  valueField={this.state.valueField}
                                  options={data}
                                  labelField={ "tec"}
                                  valueField={ "tec"}
                                  dropdownGap={5}
                                  keepSelectedInList={this.state.keepSelectedInList}
                                  onDropdownOpen={() => undefined}
                                  onDropdownClose={() => undefined}
                                  onClearAll={() => undefined}

                                  onChange={values => this.setValuesTec(values)}

                                    />
                                  <br></br>
                                </Col>
                                <Col lg="4">
                                      <p className="text-primary">Tipo de entidad SpaCy</p>
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
                                      values={[labels.find(opt => opt.text === "All")]}
                                      labelField={"value"}
                                      valueField={"text"}
                                      options={labels}
                                      dropdownGap={5}
                                      keepSelectedInList={this.state.keepSelectedInList}
                                      onDropdownOpen={() => undefined}
                                      onDropdownClose={() => undefined}
                                      onClearAll={() => undefined}

                                      onChange={values => this.setValuesLabels(values)}
                                      noDataLabel="No matches found"
                                      closeOnSelect={this.state.closeOnSelect}

                                        />
                                </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                    <Row>
                        <Col lg="9">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Wordcloud</CardTitle>

                                        <Row>
                                            <Col lg="8">
                                                <WordCloudExample selectValuesLabels={this.state.selectValuesLabels} selectValuesType={this.state.selectValuesType}  selectValuesTec={this.state.selectValuesTec}  />
                                            </Col>
                                            <Col lg="4">
                                                 <TableExample selectValuesLabels={this.state.selectValuesLabels} selectValuesType={this.state.selectValuesType}  selectValuesTec={this.state.selectValuesTec}  />
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
