import React, { Component } from 'react';
import { VectorMap  } from "react-jvectormap";
import { listTypeTechnologies } from "./data/listTypeTechnologies";
import Select from "react-dropdown-select";

export default class FilterTypeTechnologies extends Component
{
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
                  labelField: "Description",
                  valueField: "Description",
                  color: "#0074D9",
                  keepSelectedInList: true,
                  closeOnSelect: false,
                  dropdownPosition: "bottom",
                  direction: "ltr",
                  dropdownHeight: "300px"

        };
    }


   //
   // setValues = selectValues => this.setState({ selectValues });


    componentDidMount() {

    }


   render() {


   let selectValue=[]
   this.props.parentCallback(selectValue);

   // console.log(listTypeTechnologies);
    //this.state.selectValues= dataIni;




    return (

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
          values={[listTypeTechnologies.find(opt => opt.Description === "Programming language")]}
          labelField={this.state.labelField}
          valueField={this.state.valueField}
          options={listTypeTechnologies}
          dropdownGap={5}
          keepSelectedInList={this.state.keepSelectedInList}
          onDropdownOpen={() => undefined}
          onDropdownClose={() => undefined}
          onClearAll={() => undefined}
          onSelectAll={() => selectValue}
          onChange={values => selectValue}
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

  );

  }
}

