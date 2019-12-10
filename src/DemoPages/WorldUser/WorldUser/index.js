import React, {Component, Fragment} from 'react';

import Tabs from 'react-responsive-tabs';
import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
//import ChartJsCircular from './Examples/Circular';
import ChartJsLinesBars from './Examples/LinesBars';


export default class ChartJSExamples extends Component {
    render() {

        return (
            <Fragment>
            <div>
                <PageTitle
                    heading="Las tecnologías más populares en el mundo"
                    subheading="Las tecnologías de desarrollo más consultadas y vistas por las(os) usuarias(os) de todos el mundo, de un total de 2 millones 400 mil post, entre octubre de 2018 y septiembre de 2019."
                    icon="pe-7s-global icon-gradient bg-mean-fruit"
                />
            </div>
            <div>
                <ChartJsLinesBars/>
            </div>
            </Fragment>
        );
    }
}