import React, {Component, Fragment} from 'react';

import Tabs from 'react-responsive-tabs';
import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import ChartJsCircular from './Examples/Circular';
import ChartJsLinesBars from './Examples/LinesBars';

const tabsContent = [
    {
        title: 'Desserts',
        content: <ChartJsCircular/>
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
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={true} showInkBar={true} items={getTabs()}/>
            </div>
            </Fragment>
        );
    }
}