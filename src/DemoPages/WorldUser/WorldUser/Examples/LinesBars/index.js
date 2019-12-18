import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MapUser from '../MapUser';
//import LineExample2 from '../line2';
//import BarExample from '../bar';
//import HorizontalBarExample from '../horizontalBar';
//import MixExample from '../mix';
import { listTypeTechnologies } from "./../data/listTypeTechnologies";



import { listTypeTechnologiesByType } from "./../data/listTypeTechnologiesByType";
import Select from "react-dropdown-select";
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

export default class ChartJsLinesBars extends React.Component {
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
              selectValuesType: [],
              selectValuesTec: [],
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

     setValuesType = selectValuesType => this.setState({ selectValuesType });
     setValuesTec = selectValuesTec => this.setState({ selectValuesTec });


    render() {

       let todos= [{"Description":"Todos"}];
       let listTechnologies=todos.concat(listTypeTechnologies);

       let filter="Todos";
        this.state.selectValuesType.forEach(element => {
            filter= element.Description;
        });


      // let data=  listTypeTechnologiesByType.filter(l => l.Description== filter);
       let data=  {}
       if(filter=="Todos")
       {

            //data = listTypeTechnologiesByType;
            //todos= [{"Description":"Todos","tec":"Todos"}];
            data = [{"Description":"Todos","tec":"Todos"}];

       }
       else
            data = listTypeTechnologiesByType.filter(l => l.Description== filter);



        let filterTec="Todos";
        this.state.selectValuesTec.forEach(element => {
            filterTec= element.tec;
        });


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
                                        <p className="text-primary">Tipo de tecnología</p>

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
                                              values={[listTechnologies.find(opt => opt.Description === listTechnologies[0].Description)]}
                                              labelField={"Description"}
                                              valueField={"Description"}
                                              options={listTechnologies}
                                              dropdownGap={5}
                                              keepSelectedInList={this.state.keepSelectedInList}
                                              onDropdownOpen={() => undefined}
                                              onDropdownClose={() => undefined}
                                              onClearAll={() => undefined}

                                              onChange={values => this.setValuesType(values)}
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
                                                <br></br>
                                        </Col>
                                        <Col lg="5">
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
                                          values={[data.find(opt => opt.tec === data[0].tec)]}
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

                                        <br></br>
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
                                 <CardTitle>   {filterTec=="Todos" ? ('Total de usuarios(as) en el mundo') : ("Total usuarios(as) "+ filter + " : "+filterTec)}</CardTitle>

                                 <MapUser  selectValuesTec={this.state.selectValuesTec} selectValuesType={this.state.selectValuesType} />

                            </CardBody>
                        </Card>

                    </Col>
                </Row>

                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
