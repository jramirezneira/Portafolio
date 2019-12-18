import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter } from 'react-router-dom';

import { Dropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import Select from "react-dropdown-select";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, Row, Col } from 'reactstrap';

//var Bootstrap = require('react-bootstrap')

export default class ChartJsCircular extends React.Component {

        constructor(props) {

        super(props);





    }

    handlePageChange1() {
        window.location.hash = "#/charts/chartjs";
    }

    handlePageChange2() {
        window.location.hash = "#/WorldUser/WorldUser";
    }
     handlePageChange3() {
        window.location.hash = "#/wordcloud/wordcloud";
    }

    handlePageChange4() {
        window.location.hash = "#/CoocurrenceGraph/CoocurrenceGraph";
    }



    render() {


        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="Row"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={true}
                    transitionLeave={true}>
                    <Row>



                        <Col lg="10">
                            <CardGroup >
                              <Card style={{ width: '20rem' }} className="main-card ml-4">
                                <CardImg top width="50%" src={require('./../images/project1.png')} alt="Card image cap" />
                                <CardBody>
                                  <CardTitle>Dashboard Stack Overflow</CardTitle>
                                  <CardSubtitle>Las tecnologías más populares entre octubre 2018 y septiembre 2019</CardSubtitle>
                                {/* <CardText>Ejemplo realizado con reactjs y web scraping.
                                    Las tecnologías de desarrollo más consultadas y vistas por las(os) usuarias(os) de todos el mundo, de un total de 2 millones 400 mil post, entre octubre de 2018 y septiembre de 2019.
                                  </CardText> */}
                                  <Button outline  color="info"  onClick={this.handlePageChange1}>ver más</Button>
                                </CardBody>
                              </Card>


                              <Card style={{ width: '20rem' }} className="main-card ml-4">
                                <CardImg top width="50%" src={require('./../images/project2.png')} alt="Card image cap" />
                                <CardBody>
                                  <CardTitle>Stack Overflow en el mundo</CardTitle>
                                  <CardSubtitle>Las tecnologías más populares entre octubre 2018 y septiembre 2019</CardSubtitle>
                                {/* <CardText>Ejemplo realizado con reactjs y web scraping.
                                    Las tecnologías de desarrollo más consultadas y vistas por las(os) usuarias(os) de todos el mundo, de un total de 2 millones 400 mil post, entre octubre de 2018 y septiembre de 2019.
                                  </CardText> */}
                                  <Button outline  color="info" onClick={this.handlePageChange2}>ver más</Button>
                                </CardBody>
                              </Card>




                               <Card style={{ width: '20rem' }} className="main-card ml-4">
                                <CardImg src={require('./../images/project3.png')} alt="Card image cap" />
                                <CardBody style={{high:'25rem' }}>
                                  <CardTitle>Wordcloud Stack Overflow</CardTitle>
                                  <CardSubtitle >Las entidades o palabras más utilizadas por las(os) usuarios(as) de Stack Overflow.</CardSubtitle>
                                 {/* <CardText>Ejemplo realizado con reactjs y web scraping.
                                    Las tecnologías de desarrollo más consultadas y vistas por las(os) usuarias(os) de todos el mundo, de un total de 2 millones 400 mil post, entre octubre de 2018 y septiembre de 2019.
                                  </CardText> */}
                                  <Button outline  color="info" onClick={this.handlePageChange3}>ver más</Button>
                                </CardBody>
                              </Card>





                               <Card style={{ width: '20rem', high:'10rem' }} className="main-card ml-4">
                                <CardImg src={require('./../images/project4.png')} alt="Card image cap" />
                                <CardBody>
                                  <CardTitle>Correlación de entidades en noticias políticas de diarios Españoles</CardTitle>
                                  <CardSubtitle>Gráfico de red con los nombres y relaciones de entidades más utilizados por los diarios Españoles</CardSubtitle>
                                 {/* <CardText>Ejemplo realizado con reactjs y web scraping.
                                    Las tecnologías de desarrollo más consultadas y vistas por las(os) usuarias(os) de todos el mundo, de un total de 2 millones 400 mil post, entre octubre de 2018 y septiembre de 2019.
                                  </CardText> */}
                                  <Button outline  color="info" onClick={this.handlePageChange4}>ver más</Button>
                                </CardBody>
                              </Card>

                            </CardGroup>

                         </Col>
                    </Row>

                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
