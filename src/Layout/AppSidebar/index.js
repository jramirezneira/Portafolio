import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';

import Nav from '../AppNav/VerticalNavWrapper';
import { SocialIcon } from 'react-social-icons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';
import HeaderLogo from '../AppLogo';

import {
    setEnableMobileMenu
} from '../../reducers/ThemeOptions';

class AppSidebar extends Component {

    state = {};

    toggleMobileSidebar = () => {
        let {enableMobileMenu, setEnableMobileMenu} = this.props;
        setEnableMobileMenu(!enableMobileMenu);
    }

    render() {
        let {
            backgroundColor,
            enableBackgroundImage,
            enableSidebarShadow,
            backgroundImage,
            backgroundImageOpacity,
        } = this.props;

        return (
            <Fragment>
                <div className="sidebar-mobile-overlay" onClick={this.toggleMobileSidebar}/>
                <ReactCSSTransitionGroup
                    component="div"
                    className={cx("app-sidebar", backgroundColor, {'sidebar-shadow': enableSidebarShadow})}
                    transitionName="SidebarAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionEnter={true}
                    transitionLeave={true}>
                    <HeaderLogo/>
                    <PerfectScrollbar >
                        <div className="app-sidebar__inner">
                            <Nav/>
                        </div>
                        <div class="row justify-content-center align-self-bottom" >
                            <div>
                                 <Row>
                                    <Col lg="5">
                                        <SocialIcon url="https://www.facebook.com/profile.php?id=1145843195" style={{ height: 30, width: 30 }} />
                                    </Col>
                                    <Col lg="5">
                                        <SocialIcon url="https://www.linkedin.com/in/javier-ramirez-neira" style={{ height: 30, width: 30 }} />
                                    </Col>
                                 </Row>
                            </div>
                            <div class="container my-auto">
                              <div class="copyright text-center my-auto">
                                <span class="text-light">Javier Ramírez Neira 2019</span>
                              </div>
                            </div>
                        </div>

                    </PerfectScrollbar>
                    <div
                        className={cx("app-sidebar-bg", backgroundImageOpacity)}
                        style={{
                            backgroundImage: enableBackgroundImage ? 'url(' + backgroundImage + ')' : null
                        }}>

                    </div>

                </ReactCSSTransitionGroup>

            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
    enableSidebarShadow: state.ThemeOptions.enableSidebarShadow,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    backgroundColor: state.ThemeOptions.backgroundColor,
    backgroundImage: state.ThemeOptions.backgroundImage,
    backgroundImageOpacity: state.ThemeOptions.backgroundImageOpacity,
});

const mapDispatchToProps = dispatch => ({

    setEnableMobileMenu: enable => dispatch(setEnableMobileMenu(enable)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AppSidebar);