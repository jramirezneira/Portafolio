import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

import MetisMenu from 'react-metismenu';
import { SocialIcon } from 'react-social-icons';
import {WordCloudNav, ChartsNav} from './NavItems';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';


class Nav extends Component {




    state = {};

    render() {


        return (
            <Fragment>
                <h5 className="app-sidebar__heading">Stack Overflow</h5>
                <MetisMenu content={ChartsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>


                <h5 className="app-sidebar__heading">Diarios de España</h5>
                <MetisMenu content={WordCloudNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <br/><br/><br/><br/>




            </Fragment>
        );
    }

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }
}

export default withRouter(Nav);