import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import React, {Suspense, lazy, Fragment} from 'react';

import {
    ToastContainer,
} from 'react-toastify';


const Charts = lazy(() => import('../../DemoPages/Charts'));
const WordCloud = lazy(() => import('../../DemoPages/WordCloud'));
const CoocurrenceGraph = lazy(() => import('../../DemoPages/CoocurrenceGraph'));
const WorldUser = lazy(() => import('../../DemoPages/WorldUser'));







const AppMain = () => {

    return (
        <Fragment>

            {/* Components */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-5">
                            Please wait while we load all the Components examples
                            <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
            {/*    <Route path="/components" component={Components}/> */}
            </Suspense>

            {/* Forms */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-5">
                            Please wait while we load all the Forms examples
                            <small>Because this is a demonstration we load at once all the Forms examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
             {/*   <Route path="/forms" component={Forms}/>*/}
            </Suspense>



            {/* Tables */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-5">
                            Please wait while we load all the Tables examples
                            <small>Because this is a demonstration we load at once all the Tables examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
             {/*  <Route path="/tables" component={Tables}/>*/}
            </Suspense>

            {/* Elements */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Please wait while we load all the Elements examples
                            <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
             {/*   <Route path="/elements" component={Elements}/>*/}
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
                <Redirect to="/charts/chartjs"/>
            )}/>
            <ToastContainer/>
        </Fragment>
    )
};

export default AppMain;