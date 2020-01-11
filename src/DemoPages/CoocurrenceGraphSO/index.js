import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// Charts

import CoocurrenceGraphSO from "./CoocurrenceGraphSO/";

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

                    <Route path={`${match.url}/CoocurrenceGraphSO`} component={CoocurrenceGraphSO}/>

                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Charts;