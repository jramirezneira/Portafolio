import React, {Component, Fragment} from 'react';

import Tabs from 'react-responsive-tabs';

import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import ChartJsCircular from './Examples/tab1';


const tabsContent = [
    {
        title: 'Entidades identificadas con SpaCy',
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
                    heading="Reconocimiento y correlación de entidades de noticias políticas de diarios Españoles con SpaCy"
                    subheading="SpaCy es una librería de procesamiento de lenguaje natural muy utilizada para el reconocimiento de entidades dentro de textos. El objetivo de este trabajo es descubrir los nombres de entidades más utilizados en noticias políticas de diarios Españoles en función de su línea editorial, ya sea progresista o conservadora. Los diarios del ala progresista son: El diario y Público  "
                    icon="pe-7s-graph2 icon-gradient bg-mean-fruit"
                />
            </div>
            <div>

                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </div>
            </Fragment>
        );
    }
}