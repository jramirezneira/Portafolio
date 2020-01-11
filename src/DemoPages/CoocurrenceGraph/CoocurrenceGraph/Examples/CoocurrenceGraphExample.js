import React, { Component, Fragment, BackgroundContainer,BackgroundImage, PageContainer } from 'react';
import ReactDOM from 'react-dom';

import { Resizable } from 're-resizable';
import Graph from 'vis-react';
//import MediaQuery from 'react-responsive'
import "./css/styles.css";
import {
    Row, Col
} from 'reactstrap';




let options =
{
    autoResize: true,

        //configure:{showButton:true},
      layout: {
        randomSeed: 2,
        hierarchical: false

      },

      nodes: {


        shape: "dot",
        size: 1,

        borderWidth: 1.5,
        borderWidthSelected: 2,

        shadow:{
          enabled: true,
          color: 'rgba(0,0,0,0.2)',
          size:4,
          x:5,
          y:5
        },
      },
      edges: {
        width: 0.5,
        color: {
          color: "#D3D3D3",
          highlight: "#DD4F43",
          hover: "#DD4F43",
          opacity: 0.8
        },

        arrows: {
          to: { enabled: false, scaleFactor: 0.5, type: "arrow" },
          middle: { enabled: false, scaleFactor: 1, type: "arrow" },
          from: { enabled: false, scaleFactor: 0.1, type: "arrow" }
        },
        smooth: {
          type: "continuous",
          roundness: 0
        }
      },
       physics: {
        barnesHut: {
          gravitationalConstant: -40000,
          centralGravity: 5,
          springLength: 150,
          avoidOverlap: 0
        },
        stabilization: { iterations: 10000 }
      },
      interaction: {
        hover: true,
        hoverConnectedEdges: true,
        selectable: false,
        selectConnectedEdges: false,
        zoomView: true,
        dragView: true,


      }
    };




var highlightActive = true;



export default class CoocurrenceGraphExample extends React.Component<{}, {width: number, height: number}> {


    simulateClick(e) {
            e.click();
          };

   setState(stateObj) {
    if (this.mounted) {
      super.setState(stateObj);
    }
  }


  componentWillMount() {
    this.mounted = true;
  }
  constructor(props) {
    super(props);
    this.events = {


      select: function(event) {
   //   console.log(event);
        var { nodes, edges } = event;

      },
      hoverNode: function(event) {
     // console.log(event);
        this.neighbourhoodHighlight(event, this.props.searchData);
      },
      blurNode: function(event) {
      //console.log(event);
        this.neighbourhoodHighlightHide(event);
      },
      click: function(event) {
        //   this.neighbourhoodHighlight(event, this.props.searchData);
     //   this.redirectToLearn(event, this.props.searchData);
      }
    };



    let iniNodes =require('./data/nodes_'+this.props.selectValuesType+'.json');



    let newGraph = {
	nodes: Object.values(iniNodes),
	edges: require('./data/links_'+this.props.selectValuesType+'.json'),

	};

    this.state = {
      graph: newGraph,
      iniNodes:{},
      options:options,
      network: null,
      iniNodes:newGraph.nodes,
      showFirstTag:null,
      showFirstTagOcurrs:null,
      arrEdges:[]
    };
   this.measure = this.measure.bind(this);
    this.events.hoverNode = this.events.hoverNode.bind(this);
    this.events.blurNode = this.events.blurNode.bind(this);
    this.events.click = this.events.click.bind(this);
    this.neighbourhoodHighlight = this.neighbourhoodHighlight.bind(this);
    //this.redirectToLearn = this.redirectToLearn.bind(this);
    this.neighbourhoodHighlightHide = this.neighbourhoodHighlightHide.bind(  this   );


   // this.iniciaConsulta();

  }

iniciaConsulta()
{

    let filter=this.props.selectValuesType;



        let iniNodes = {};
        iniNodes=require("./data/nodes_"+filter+".json");

        iniNodes=Object.values(iniNodes);

        let iniLinks =require('./data/links_'+filter+'.json');

        let filterto=this.props.selectValuesTo;//"Todos";
        /*this.props.selectValuesTo.forEach(element => {
            filterto= element.to;
        });*/


        if(filterto=="Todos")
            iniLinks = iniLinks;
        else
            iniLinks = iniLinks.filter(l => l.to== filterto);


        let iniNodesArray=[];

        if(filterto=="Todos")
            iniNodesArray=iniNodes;
        else
        {
            iniLinks.forEach(element => {
            let locNode =iniNodes.filter(n => n.label === element.from);

                iniNodesArray.push(locNode[0]);
            });
            let locNode =iniNodes.filter(n => n.label === filterto);
            iniNodesArray.push(locNode[0]);
        }
        let newGraph = {
        nodes: iniNodesArray,
        edges: iniLinks,

        };



        this.setState({
            graph: newGraph,
            iniNodes:iniNodesArray
        });


        this.events.hoverNode = this.events.hoverNode.bind(this);
        this.events.blurNode = this.events.blurNode.bind(this);
        this.events.click = this.events.click.bind(this);
        this.neighbourhoodHighlight = this.neighbourhoodHighlight.bind(this);
        //this.redirectToLearn = this.redirectToLearn.bind(this);
        this.neighbourhoodHighlightHide = this.neighbourhoodHighlightHide.bind(  this   );

        if (this.state.network !== undefined )
            if (filterto=="Todos")
                this.state.network.moveTo({scale:0.6, position:{x:1,y:1}});
            else
                this.state.network.moveTo({scale:1, position:{x:1,y:1}});



}

componentDidUpdate(prevProps)
{
    console.log(prevProps);
    if(this.props.selectValuesType !== prevProps.selectValuesType ||
        this.props.selectValuesTo !== prevProps.selectValuesTo
    ){

        this.iniciaConsulta();




      }

}

 componentDidMount() {
    this.mounted = true;

  }

  componentWillUnmount() {
    this.mounted = false;

   // window.addEventListener("resize", this.measure);

  }

  measure(data) {
    this.state.network.redraw();
    this.state.network.fit();
  }
  neighbourhoodHighlight(params, searchData) {
    let allNodes = this.state.graph.nodes;
    let Nodes = new this.vis.DataSet(allNodes);
    let cloneNodes = Nodes.get({ returnType: "Object" });



   // this.state.network.canvas.body.container.style.cursor = "pointer";


    if (params.node !== undefined) {
      highlightActive = true;
      let i, j;
      let selectedNode = params.node;
      let degrees = 0;


      for (var nodeId in cloneNodes) {

       if (cloneNodes[nodeId].hiddenLabel === undefined) {



          cloneNodes[nodeId].hiddenColor = cloneNodes[nodeId].color;
          cloneNodes[nodeId].hiddenLabel = cloneNodes[nodeId].label;
          cloneNodes[nodeId].label = undefined;
          cloneNodes[nodeId].color = "rgba(211, 211, 211,0.5)";
        }
      }

      let connectedNodes = this.state.network.getConnectedNodes(selectedNode);

      for (let i = 0; i < connectedNodes.length; i++) {

        if (cloneNodes[connectedNodes[i]]["hiddenLabel"] !== undefined) {

          //let locNode =this.state.iniNodes.filter(n => n.label === connectedNodes[i]);
          cloneNodes[connectedNodes[i]].label =  cloneNodes[connectedNodes[i]]["hiddenLabel"];
          cloneNodes[connectedNodes[i]].color = cloneNodes[connectedNodes[i]]["hiddenColor"];
          cloneNodes[connectedNodes[i]]["hiddenLabel"] = undefined;


        }
      }

      // the main node gets its own color and its label back.
      //let locNode =this.state.iniNodes.filter(n => n.label === selectedNode);
      if (cloneNodes[selectedNode]["hiddenLabel"] !== undefined) {
        cloneNodes[selectedNode].label = cloneNodes[selectedNode]["hiddenLabel"];
        cloneNodes[selectedNode].color = "red";//cloneNodes[selectedNode]["hiddenColor"];
        this.setState({showFirstTag:"Etiqueta: "+cloneNodes[selectedNode]["hiddenLabel"]});
        this.setState({showFirstTagOcurrs: "Cantidad ocurrencias: "+cloneNodes[selectedNode].occurs});
        cloneNodes[selectedNode]["hiddenLabel"] = undefined;
      }
      //  allNodess[nodeIds].borderWidth= 1.5;

       let arrEdges= [];
      connectedNodes.forEach(cN => {
        this.state.graph.edges.forEach(iL => {

            if(cN===iL.from && cloneNodes[selectedNode].label===iL.to)
                arrEdges.push({"to":iL.to, "from":iL.from, "occurs":iL.occurs})

            if(cN===iL.to && cloneNodes[selectedNode].label===iL.from)
                arrEdges.push({"to":iL.from, "from":iL.to, "occurs":iL.occurs})
                //console.log(iL);
        });
      });
      this.setState({arrEdges});


    } else if (highlightActive === true) {
      // reset all nodes

      for (let nodeId in cloneNodes) {

        if (cloneNodes[nodeId]["hiddenLabel"] !== undefined) {
          cloneNodes[nodeId].label = cloneNodes[nodeId]["hiddenLabel"];
          cloneNodes[nodeId].color = cloneNodes[nodeId]["hiddenColor"];
          cloneNodes[nodeId]["hiddenLabel"] = undefined;
        }
      }
      highlightActive = true;
    }

    let updateArray = [];
    for (let nodeId in cloneNodes) {
      if (cloneNodes.hasOwnProperty(nodeId)) {
        updateArray.push(cloneNodes[nodeId]);
      }
    }
    if (this.mounted) {
     this.setState({
        graph: {
          nodes: updateArray,
          edges: this.state.graph.edges
        }
      });
        //console.log(this.state.graph.nodes);
    }

}


  neighbourhoodHighlightHide(params) {
    let allNodes = this.state.graph.nodes;
    let Nodes = new this.vis.DataSet(allNodes);
    let allNodess = Nodes.get({ returnType: "Object" });

    this.setState({showFirstTag:null});
    this.setState({showFirstTagOcurrs:null});
    this.setState({arrEdges:[]});

    // let allNodess = allNodes.map(a => {return {...a}})
    this.state.network.canvas.body.container.style.cursor = "default";
    console.log(allNodess);

    highlightActive = true;
    if (highlightActive === true) {
      // reset all nodes
      for (var nodeIds in allNodess) {


        //allNodess[nodeIds].borderWidth= 1.5;
        //allNodess[nodeIds].color =  {"border":"rgba(43, 124, 233)", "background": '#97C2FC'};
        let locNode =this.state.iniNodes.filter(n => n.label === nodeIds);
          allNodess[nodeIds].color = locNode[0].color;//allNodess[nodeIds].hiddenColor;


        if (allNodess[nodeIds].hiddenLabel !== undefined) {
          allNodess[nodeIds].label = allNodess[nodeIds].hiddenLabel;


                    allNodess[nodeIds].hiddenLabel = undefined;
          allNodess[nodeIds].hiddenColor = undefined;
        }
      }
      highlightActive = false;
    }

    var updateArray = [];
    for (var nodeIde in allNodess) {
      if (allNodess.hasOwnProperty(nodeIde)) {
        updateArray.push(allNodess[nodeIde]);
      }
    }

    if (this.mounted) {
      this.setState({
        graph: {
          nodes: updateArray,
          edges: this.state.graph.edges
        }
      });
    }
    //this.iniciaConsulta();

  }

  getNetwork = data => {
    this.setState({ network: data });


  };




  render() {


            return (
                    <div>
                    <Row>
                        <Col lg="8">
                            <Graph id="graph1"
                              graph={this.state.graph}
                              style={{ height: "640px",  background: '#FFFDF5' }}
                              options={options}
                              getNetwork={this.getNetwork}
                              getEdges={this.getEdges}
                              getNodes={this.getNodes}
                              events={this.events}
                              vis={vis => (this.vis = vis)}
                            />
                        </Col>
                        <Col lg="4">
                            <p className="text-primary"><strong>{this.state.showFirstTag}</strong> </p>
                            <p className="text-primary"><strong>{this.state.showFirstTagOcurrs}</strong></p>
                            <BootstrapTable  wrapperClasses="table-responsive" data={this.state.arrEdges}    striped={true} hover={true} condensed= {true} search={false} >
                                <TableHeaderColumn dataField="to" isKey={true}  dataSort={ true } width={'100px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >Etiqueta</TableHeaderColumn>
                                <TableHeaderColumn dataField="from"  dataSort={ true } width={'100px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >Etiqueta relacionada</TableHeaderColumn>
                                <TableHeaderColumn dataField="occurs" dataSort={ true } width={'100px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >Cantidad de ocurrencias</TableHeaderColumn>
                            </BootstrapTable>
                        </Col>
                    </Row>
                </div>
            );



  }
}

