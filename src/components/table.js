import {useState} from "react"
import Graph from "./graph"
import "./style/table.css"
import { BiInfoCircle } from "react-icons/bi";
import Incident from "./incident";
import Popup from "./popup";


const  Table = props =>{
    
    const [showData, toggleData] = useState(false);
    const toggleInfo= (employee) =>{
        toggleData(!showData)
        console.log(employee)
    }

    if(props.dataChoice == "Total"){
        return(
            <div style={{display:"flex", flexDirection:'row', width:"100%", overflowY:"scroll",height:"95%"}}>
                <div className="table-container">
                    <h1>Total Incident Report</h1>
                    <div className="table">
                        <h3>Incidents</h3>
                        <h3>Name</h3>
                        <h3>Total Incidents</h3>
                        <h3>Avg Time</h3>
                </div>
                {
                   
                    props.data.map(employee =>{
                        
                        return(
                            <div className="table">
                                <div onClick={() => toggleInfo(employee)}> <BiInfoCircle/> {showData && <Popup data={employee.tickets} />} </div>
                                <h3>{employee.name}</h3>
                                <h3>{employee.Incidents}</h3>
                                <h3>{(employee.time / employee.Incidents).toFixed(2)} seconds</h3>
                                
                            </div>
                        )
                    })
                }

                
            </div>
                
            </div>
        );
    
    }

    else if(props.dataChoice=="Access"){
        return(
            <div style={{display:"flex", flexDirection:'row', overflowY:"scroll",height:"90%"}}>
            <div className="table-container">
                <h1>Access Incident Report</h1>
                <div className="table">
                    <h3>Name</h3>
                    <h3>Access Incidents</h3>
                    <h3>Avg Time</h3>
            </div>
            {
                
                props.data.map(employee =>{
                    var avg = 0
                    if(employee.AccessIncidents != 0){
                        avg = employee.AccessTime / employee.AccessIncidents
                    }
                    return(
                        <div className="table">
                            <h3>{employee.name}</h3>
                            <h3>{employee.AccessIncidents}</h3>
                            <h3>{avg.toFixed(2)} seconds</h3>
                            
                        </div>
                    )
                })
            }

            
        </div>
            
        </div>
        );
    }

    else if(props.dataChoice=="Help"){
        return(
            <div style={{display:"flex", flexDirection:'row', width:"100%",overflowY:"scroll",height:"90%"}}>
            <div className="table-container">
                <h1>Help Incident Report</h1>
                <div className="table">
                    <h3>Name</h3>
                    <h3>Help / Assistance Incidents</h3>
                    <h3>Avg Time</h3>
            </div>
            {
                
                props.data.map(employee =>{
                    var avg = 0
                    if(employee.HelpIncidents != 0){
                        avg = employee.helpTime / employee.HelpIncidents
                    }
                    return(
                        <div className="table">
                            <h3>{employee.name}</h3>
                            <h3>{employee.HelpIncidents}</h3>
                            <h3>{avg.toFixed(2)} seconds</h3>
                            
                        </div>
                    )
                })
            }

            
        </div>
            
        </div>
        );
    }

    else if(props.dataChoice=="Fail"){
        return(
            <div  style={{display:"flex", flexDirection:'row', width:"100%",overflowY:"scroll",height:"90%"}} >
            <div className="table-container">
                <h1>Failure Incident Report</h1>
                <div className="table">
                    <h3>Name</h3>
                    <h3>Failure Incidents</h3>
                    <h3>Avg Time</h3>
            </div>
            {
                
                props.data.map(employee =>{
                    var avg = 0
                    if(employee.FailCount != 0){
                        avg = employee.FailTime / employee.FailCount
                    }
                    return(
                        <div className="table">
                            <h3>{employee.name}</h3>
                            <h3>{employee.FailCount}</h3>
                            <h3>{avg.toFixed(2)} seconds</h3>
                            
                        </div>
                    )
                })
            }

            
        </div>
            
        </div>
        );
    }

}

export default Table;