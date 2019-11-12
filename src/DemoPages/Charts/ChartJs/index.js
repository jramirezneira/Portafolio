import React, {Component, Fragment} from 'react';

import Tabs from 'react-responsive-tabs';
import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import ChartJsCircular from './Examples/Circular';
import ChartJsLinesBars from './Examples/LinesBars';

const tabsContent = [
    {
        title: 'Top Tecnologías',
        content: <ChartJsCircular/>
    },
        {
        title: 'Usuarios por tecnología y país',
        content: <ChartJsLinesBars/>
    }
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
                    heading="Dashboard Stack Overflow - Ejemplo realizado con reactjs y web scraping"
                    subheading="Las tecnologías de desarrollo más consultadas y vistas por las(os) usuarias(os) de todos el mundo, de un total de 2 millones 400 mil post, entre octubre de 2018 y septiembre de 2019."
                    icon="pe-7s-graph2 icon-gradient bg-mean-fruit"
                />
            </div>
            <div>
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={true} showInkBar={true} items={getTabs()}/>
            </div>
            </Fragment>
        );
    }
}