import { useState, useEffect } from "react";
import Incident from "./incident";
import "../App.css";
const Popup = props =>{
  


    if(props.choice == "incident"){
        return(
            <div className="popup">
                <p1 style={{padding:"5px"}}>Assigned to: {props.data.assignedTo} </p1>
                <p1 style={{padding:"5px"}}>Caller: {props.data.caller} </p1>
                <p1 style={{padding:"5px"}}>State: {props.data.state}</p1>
                <p1 style={{padding:"5px"}}>Priority: {props.data.priority} </p1>
                <p1 style={{padding:"5px"}}>Category:  {props.data.category}</p1>
                <p1 style={{padding:"5px"}}>Subcategory: {props.data.subcategory}</p1>
                <p1 style={{padding:"5px"}}>Resolve Time: {props.data.resolveTime} seconds</p1>
                <p1 style={{padding:"5px"}}>Time Created: {props.data.timeCreated.getMonth()+1}/{props.data.timeCreated.getDate()}</p1>
                <p1 style={{padding:"5px"}} >Contact Type: {props.data.contactType} </p1>
               
                
            </div>
        )
    }
    
    else{
        return(
        
            <div className="incident-popup">
               
                {props.data.map(ticket =>
                    
                    <Incident data={ticket}/>
                    
                )}
            </div>
        )
    }
    }


export default Popup;