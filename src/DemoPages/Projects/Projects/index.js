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
                    heading="Portafolio de proyectos Javier Ramírez"
                    subheading="Me dedico al desarrollo herramientas web con reactjs para la visualización de business intellegence, machine learning y procesamiento de lenguaje natural."
                    subheading1="Implemento procesos de recolección de datos, estructurados y no estructurados, desde páginas web con técnicas de webscraping de python."
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