import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Resizable } from 're-resizable';
import Graph from 'vis-react';

import "./css/styles.css";

var highlightActive = false;
let options = {
  layout: {
    randomSeed: 9
  },

  nodes: {

    fixed: {
      x: false,
      y: false
    },
    shape: "dot",
    size: 1,
   // color:"rgba(151, 194, 252)",
   /* color:{
        border: "rgba(45, 125, 233)",

    },*/
    borderWidth: 1.5,
    borderWidthSelected: 2,

    font: {
      size: 15,
      align: "center",

    },
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

  // physics: {
  //   forceAtlas2Based: {
  //       gravitationalConstant: -200,
  //       centralGravity: 0.05,
  //       springLength: 230,
  //       springConstant: 0.08,
  //       avoidOverlap:9
  //   },
  //   solver: 'forceAtlas2Based',
  //   timestep: 0.35,
  //   stabilization: {enabled:true,iterations: 10}
  // },
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
    zoomView: false,
    dragView: false
  }
};




export default class CoocurrenceGraphExample extends Component
{

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
        this.redirectToLearn(event, this.props.searchData);
      }
    };


    let iniNodes =require('./data/nodes_'+this.props.selectValuesType[0].Description+'.json');



    let newGraph = {
	nodes: Object.values(iniNodes),
	edges: require('./data/links_'+this.props.selectValuesType[0].Description+'.json'),

	};

    this.state = {
      graph: newGraph,
      style: { width: "80%", height: "100%" },
      network: null
    };
   this.measure = this.measure.bind(this);
    this.events.hoverNode = this.events.hoverNode.bind(this);
    this.events.blurNode = this.events.blurNode.bind(this);
    this.events.click = this.events.click.bind(this);
    this.neighbourhoodHighlight = this.neighbourhoodHighlight.bind(this);
    this.redirectToLearn = this.redirectToLearn.bind(this);
    this.neighbourhoodHighlightHide = this.neighbourhoodHighlightHide.bind(  this   );
  }


componentDidUpdate(prevProps)
{
   // console.log(this.props.selectValuesTo[0]);
    if(this.props.selectValuesType !== prevProps.selectValuesType ||
        this.props.selectValuesTo !== prevProps.selectValuesTo
    ){

       let filter=this.props.selectValuesType[0].Description;
      /* this.props.selectValuesType.forEach(element => {
            filter= element.Description;
      });*/


        let iniNodes =require('./data/nodes_'+filter+'.json');
        iniNodes=Object.values(iniNodes);

        let iniLinks =require('./data/links_'+filter+'.json');

        console.log(this.props);
        let filterto="Todos";
        this.props.selectValuesTo.forEach(element => {
            filterto= element.to;
        });


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
        console.log(iniNodesArray);






        let newGraph = {
        nodes: iniNodesArray,
        edges: iniLinks,

        };
        this.setState({
        graph: newGraph
        });

        //this.state.graph=newGraph;
        this.measure = this.measure.bind(this);
        this.events.hoverNode = this.events.hoverNode.bind(this);
        this.events.blurNode = this.events.blurNode.bind(this);
        this.events.click = this.events.click.bind(this);
        this.neighbourhoodHighlight = this.neighbourhoodHighlight.bind(this);
        this.redirectToLearn = this.redirectToLearn.bind(this);
        this.neighbourhoodHighlightHide = this.neighbourhoodHighlightHide.bind(  this   );

        this.getNetwork = data => {
        this.setState({ network: data });
        };
      }

          this.state.network.redraw();

}


 componentDidMount() {
    this.mounted = true;
    window.addEventListener("resize", this.measure);

  }

  componentWillUnmount() {
    this.mounted = false;
    window.removeEventListener("resize", this.measure);


  }

  measure(data) {
    this.state.network.redraw();
    this.state.network.fit();
  }

  redirectToLearn(params, searchData) {
    const result = getObjects(
      this.state.graph.nodes,
      "id",
      this.state.network.getNodeAt(params.pointer.DOM)
    );
    //console.log(this.state.network.getNodeAt(params.pointer.DOM));
    if (this.state.network.getNodeAt(params.pointer.DOM) !== undefined) {
     //const result = getObjects(this.state.graph.nodes, 'id', this.state.network.getNodeAt(params.pointer.DOM));

      if (result[0]) {
        console.log(result[0]);
        // window.open('/' + result[0].concept_url, '_blank');
      }
    }
  }

  neighbourhoodHighlight(params, searchData) {
    let allNodes = this.state.graph.nodes;
    // let cloneNodes = allNodes.map(a => {return {...a}});
    let Nodes = new this.vis.DataSet(allNodes);
    let cloneNodes = Nodes.get({ returnType: "Object" });

    this.state.network.canvas.body.container.style.cursor = "pointer";

    if (params.node !== undefined) {
      highlightActive = true;
      let i, j;
      let selectedNode = params.node;
      let degrees = 0;


      for (var nodeId in cloneNodes) {

      //  console.log(cloneNodes[nodeId]);
        cloneNodes[nodeId].color = "rgba(211, 211, 211,0.5)";
     //   cloneNodes[nodeId].borderColor = "rgba(45, 125, 233)";
        //cloneNodes[nodeId].borderWidth = 1.5;
       if (cloneNodes[nodeId].hiddenLabel === undefined) {

          cloneNodes[nodeId].hiddenColor = cloneNodes[nodeId].color;
          //cloneNodes[nodeId].color = "rgba(211, 211, 211,0.5)";
          cloneNodes[nodeId].hiddenLabel = cloneNodes[nodeId].label;
          cloneNodes[nodeId].label = undefined;
        }
      }

      let connectedNodes = this.state.network.getConnectedNodes(selectedNode);
      //  console.log(connectedNodes);
      let allConnectedNodes = [];
      // get the second degree nodes
      for (i = 1; i < degrees; i++) {
        for (j = 0; j < connectedNodes.length; j++) {
          allConnectedNodes = allConnectedNodes.concat(
            this.state.network.getConnectedNodes(connectedNodes[j])
          );

        }
      }

      // all second degree nodes get a different color and their label back
     for (i = 0; i < allConnectedNodes.length; i++) {



        //cloneNodes[allConnectedNodes[i]].borderWidth = 1.5;
        if (cloneNodes[allConnectedNodes[i]].hiddenLabel !== undefined) {
        cloneNodes[allConnectedNodes[i]].color = undefined;
          cloneNodes[allConnectedNodes[i]].label =
            cloneNodes[allConnectedNodes[i]].hiddenLabel;
          cloneNodes[allConnectedNodes[i]].hiddenLabel = undefined;
        }
      }

      // all first degree nodes get their own color and their label back

     // console.log(connectedNodes);
      for (let i = 0; i < connectedNodes.length; i++) {

        cloneNodes[connectedNodes[i]].color = undefined;

        //cloneNodes[connectedNodes[i]].color = undefined;
        if (cloneNodes[connectedNodes[i]]["hiddenLabel"] !== undefined) {
          cloneNodes[connectedNodes[i]].label =
            cloneNodes[connectedNodes[i]]["hiddenLabel"];
          const fontSize = this.state.network.body.nodes;
          fontSize[connectedNodes[i]].options.font.size = 15;
          cloneNodes[connectedNodes[i]]["hiddenLabel"] = undefined;
        }
      }

      // the main node gets its own color and its label back.
      cloneNodes[selectedNode].color = "#2B7CE9";
      if (cloneNodes[selectedNode]["hiddenLabel"] !== undefined) {
        cloneNodes[selectedNode].label =
          cloneNodes[selectedNode]["hiddenLabel"];
        const fontSize = this.state.network.body.nodes;
        fontSize[selectedNode].options.font.size = 15;
        // this.setState({fontSize})
        cloneNodes[selectedNode]["hiddenLabel"] = undefined;

      }
    } else if (highlightActive === true) {
      // reset all nodes
      for (let nodeId in cloneNodes) {

        cloneNodes[nodeId].color = undefined;
         console.log(cloneNodes[nodeId]);
        if (cloneNodes[nodeId]["hiddenLabel"] !== undefined) {
          cloneNodes[nodeId].label = cloneNodes[nodeId]["hiddenLabel"];
          const fontSize = this.state.network.body.nodes;
          fontSize[nodeId].options.font.size = 15;
          this.setState({ fontSize });
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
    }
}


  neighbourhoodHighlightHide(params) {
    let allNodes = this.state.graph.nodes;



    let Nodes = new this.vis.DataSet(allNodes);
    let allNodess = Nodes.get({ returnType: "Object" });
    // let allNodess = allNodes.map(a => {return {...a}})
    this.state.network.canvas.body.container.style.cursor = "default";


  /*  for (var nodeId in allNodess) {


      allNodess[nodeId].color =  undefined;
      if (allNodess[nodeId].hiddenLabel === undefined) {

        allNodess[nodeId].hiddenLabel = allNodess[nodeId].label;
        allNodess[nodeId].label = undefined;
      }
    }*/

    highlightActive = true;
    if (highlightActive === true) {
      // reset all nodes
      for (var nodeIds in allNodess) {


        allNodess[nodeIds].borderWidth= 1.5;
        allNodess[nodeIds].color = {"border":"rgba(43, 124, 233)", "background": '#97C2FC'};
       // allNodess[nodeIds].color = Nodes.get({ returnType: "Object" });
        //allNodess[nodeIds].color.border = "#2D7DE9";

        //allNodess[nodeIds].borderWidth= 1.5;

        if (allNodess[nodeIds].hiddenLabel !== undefined) {
          allNodess[nodeIds].label = allNodess[nodeIds].hiddenLabel;
       //   console.log(this.state.network.body.nodes);
          const fontSize = this.state.network.body.nodes;
          fontSize[nodeIds].options.font.size = 15;
          this.setState({ fontSize });
          allNodess[nodeIds].hiddenLabel = undefined;
        }
      }
      highlightActive = false;
    }
    //console.log(allNodess);
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
  }

  getNetwork = data => {
    this.setState({ network: data });
  };


  render() {


    return (
    <div className="vis-react">
         <Fragment>

        <Graph
          graph={this.state.graph}
          style={ this.state.style}
          options={options}
          getNetwork={this.getNetwork}
          getEdges={this.getEdges}
          getNodes={this.getNodes}
          events={this.events}
          vis={vis => (this.vis = vis)}
        />
      </Fragment>
      </div>
    );
  }
}

