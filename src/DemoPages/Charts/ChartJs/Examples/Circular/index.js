import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import BarLineTec from '../BarLineTec';
//import MapUser from '../MapUser';

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
                        <Col lg="12">
                            <Card className="main-card mb-6">
                                <CardBody>
                                    <div>
                                        <BarLineTec   />
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
