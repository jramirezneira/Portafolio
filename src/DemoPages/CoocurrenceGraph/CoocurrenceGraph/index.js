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
                    heading="Identificación y correlación de entidades en noticias políticas de diarios Españoles con SpaCy"
                    subheading="SpaCy es una librería de procesamiento de lenguaje natural utilizada para el reconocimiento de entidades dentro de datos de texto no estructurados, ejemplo: personas (incluso ficticias), nacionalidades o grupos religiosos o políticos. edificios, aeropuertos, carreteras, puentes, etc."
                    subheading1="El objetivo de este trabajo es descubrir, mediante un gráfico de red, los nombres de entidades más comunes utilizadas por diarios Españoles en más de 10 mil titulares de noticias políticas del año 2019, en función de su línea editorial, progresista o conservadora, además de identicar las relaciones más frecuentes entre ellas. Los diarios del ala progresista son: El diario y Público, por el lado conservador están: ABC y La razón.  "
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