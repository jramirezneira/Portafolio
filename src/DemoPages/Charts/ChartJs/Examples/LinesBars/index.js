import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>





                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
