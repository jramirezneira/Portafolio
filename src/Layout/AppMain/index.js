import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import React, {Suspense, lazy, Fragment} from 'react';

import {
    ToastContainer,
} from 'react-toastify';


const Charts = lazy(() => import('../../DemoPages/Charts'));
const WordCloud = lazy(() => import('../../DemoPages/WordCloud'));
const CoocurrenceGraph = lazy(() => import('../../DemoPages/CoocurrenceGraph'));
const CoocurrenceGraphSO = lazy(() => import('../../DemoPages/CoocurrenceGraphSO'));
const WorldUser = lazy(() => import('../../DemoPages/WorldUser'));
const Projects = lazy(() => import('../../DemoPages/Projects'));






const AppMain = () => {

    return (
        <Fragment>


            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Cargando dashboard...
                         </h6>
                    </div>
                </div>
            }>
                <Route path="/Projects" component={Projects}/>
            </Suspense>


            {/* Dashboard Widgets */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Cargando dashboard...
                         </h6>
                    </div>
                </div>
            }>
                <Route path="/CoocurrenceGraph" component={CoocurrenceGraph}/>
            </Suspense>

             <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Cargando dashboard...
                         </h6>
                    </div>
                </div>
            }>
                <Route path="/CoocurrenceGraphSO" component={CoocurrenceGraphSO}/>
            </Suspense>


             <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Cargando dashboard...
                         </h6>
                    </div>
                </div>
            }>
                <Route path="/WorldUser" component={WorldUser}/>
            </Suspense>


            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Cargando dashboard...
                         </h6>
                    </div>
                </div>
            }>
                <Route path="/wordcloud" component={WordCloud}/>
            </Suspense>


            {/* Dashboards */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Cargando dashboard...
                       </h6>
                    </div>
                </div>
            }>
                <Route path="/charts" component={Charts}/>
            </Suspense>

            <Route exact path="/" render={() => (
                <Redirect to="/Projects/Projects"/>
            )}/>
            <ToastContainer/>
        </Fragment>
    )
};

export default AppMain;