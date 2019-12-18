import React, {Component, Fragment} from 'react';

import Tabs from 'react-responsive-tabs';

import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import ChartJsCircular from './Examples/tab1';



const tabsContent = [
    {
        title: 'Análisis de red con entidades identificadas con SpaCy',
        content: <ChartJsCircular/>
    }
     /*{,   {
        title: 'User by Country and Technologies',
        content: <ChartJsLinesBars/>
    } }*/
];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class ChartJSExamples extends Component {
    render() {

        return (
            <Fragment>
             <div>
                <PageTitle
                    heading="Proyectos"
                    subheading="Sitio web desarrollado con reactjs."
                    subheading1="Procesos de extracción de datos desde sitios web de Stack Overflow y diarios Españoles implementados con webscraping de Python. "
                    subheading2="Análisis y correlación de entidades desarrollado con librería SpaCy de Python.  "
                    icon="pe-7s-light icon-gradient bg-sunny-morning"
                />
            </div>
            <div>
                <ChartJsCircular/>
             </div>
            </Fragment>
        );
    }
}