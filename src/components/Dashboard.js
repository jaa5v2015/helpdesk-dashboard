import {Resizable, ResizableBox} from "react-resizable";
import Graph from "./graph";
import React from "react";
import "../App.css";
import Pchart from "./Pie"
import  RGL, {WidthProvider} from "react-grid-layout";
import Table from "./table";
import TimeChart from "./timeChart";
import timeChart from "./timeGraph";

const ReactGridLayout = WidthProvider(RGL);

export default class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            width: "100%",
            height: "100%",
            dataChoice: this.props.dataChoice
        }

        
    }



    
    render(){
        return(
            <div className="grid-container">
                <Resizable className="box" height={this.state.height} width={this.state.width} onResize={this.onResize}>
                    <Table data = {this.props.data} dataChoice={this.props.dataChoice}/>
                </Resizable>

                <Resizable  height={this.state.height} width={this.state.width} onResize={this.onResize}>
                    <div className="graph" style={{width: this.state.width + 'px', height: this.state.height + 'px'}}>
                        
                        <TimeChart data={this.props.data} dataChoice={this.props.dataChoice}/>
                       
                    </div>
                </Resizable>
                <ResizableBox className="box" height={this.state.height} width={this.state.width} onResize={this.onResize}>
                    <div className="graph" style={{width: this.state.width + 'px', height: this.state.height + 'px'}}>
                    
                        <Graph data={this.props.data} dataChoice={this.props.dataChoice} time={this.props.time}/>
                        
                    </div>
                </ResizableBox>
                <ResizableBox className="box" height={this.state.height} width={this.state.width} onResize={this.onResize}>
                    <div className="graph" style={{width: this.state.width + 'px', height: this.state.height + 'px'}}>
                    
                        <Pchart data={this.props.data} dataChoice={this.props.dataChoice}/>
                        
                    </div>
                </ResizableBox>
            </div>
        );
    }



}