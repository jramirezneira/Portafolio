import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// Charts

import Projects from "./Projects/";

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Charts = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">

                    {/* Charts */}

                    <Route path={`${match.url}/Projects`} component={Projects}/>

                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Charts;