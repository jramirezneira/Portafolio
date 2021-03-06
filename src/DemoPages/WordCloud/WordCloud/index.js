import React, {Component, Fragment} from 'react';

import Tabs from 'react-responsive-tabs';

import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import ChartJsCircular from './Examples/tab1';


export default class ChartJSExamples extends Component {
    render() {

        return (
            <Fragment>
             <div>
                <PageTitle
                    heading="Procesamiento de lenguaje natural con SpaCy"
                    subheading="SpaCy es una biblioteca de procesamiento de lenguaje natural Python, permite recopilar palabras claves o entidades dentro de textos (nombre de personas, organizaciones, lugares, fechas etc). En este ejemplo, utilizaré SpaCy para identificar las entidades más utilizadas por las(os) usuarias(os)de Stack Overflow en más de 2 millones 400 mil consultas realizadas  entre octubre de 2018 y septiembre de 2019.  "
                    icon="pe-7s-display1 icon-gradient bg-mean-fruit"
                />
            </div>
            <div>
                <ChartJsCircular/>
             </div>
            </Fragment>
        );
    }
}