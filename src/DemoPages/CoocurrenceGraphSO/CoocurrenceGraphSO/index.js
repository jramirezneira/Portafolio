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
                    heading="Concurrencia entre la etiquetas de las publicaciones de StackOverflow "
                    subheading="El objetivo de este trabajo es determinar la combinación de etiquetas más recurrentes de las publicaciones realizadas por los usuarios de la página stack overflow y que reflejan las tareas y desafíos que diariamente enfrentan los desarrolladores de software. "
                    subheading1="Tomaré una muestra de 2.2 millones de publicaciones, entre octubre de 2018 y septiembre de 2019, extraida mediante un proceso de webscraping desarrollado con python, para luego determinar. a través de un gráfico de red. las relaciones de etiquetas más recurrentes.  "
                    icon="pe-7s-share icon-gradient bg-mean-fruit"
                />
            </div>
            <div>
                <ChartJsCircular/>
             </div>
            </Fragment>
        );
    }
}