import {useState} from "react"
import Graph from "./graph"
import "./style/table.css"
import { BiInfoCircle } from "react-icons/bi";
import Incident from "./incident";
import Popup from "./popup";


const EmployeeStats = props =>{
    const [showData, toggleData] = useState(false);
    const [tickets, setTickets] = useState([])
    const toggleInfo= () =>{
        toggleData(!showData)
        if(props.dataChoice == "Total"){
                setTickets(props.employee.tickets)
        }
        else if(props.dataChoice == "Access"){
            var t = []
            props.employee.tickets.map(incident=>{
                if(incident.category == "Access"){
                    t.push(incident)
                }
            })
            setTickets(t)
        }
        else if(props.dataChoice == "Help"){
            var t = []
            props.employee.tickets.map(incident=>{
                if(incident.category == "Help / Assistance"){
                    t.push(incident)
                }
            })
            setTickets(t)
        }
        else{
            var t = []
            props.employee.tickets.map(incident=>{
                if(incident.category == "Fault / Failure"){
                    t.push(incident)
                }
            })
            setTickets(t)
        }
    }

    
   if(props.dataChoice == "Total"){
    return(
        

        <div className="table">
            <div>
                 <h3><BiInfoCircle onClick={toggleInfo}/></h3> 
                 {showData && <Popup data={tickets} />} 
            </div>
            <h3>{props.employee.name}</h3>
            <h3>{props.employee.Incidents}</h3>
            <h3>{((props.employee.time / props.employee.Incidents).toFixed(2) / 60).toFixed(2)} minutes</h3>
        </div>
    )
   }

   else if(props.dataChoice == "Access"){

    if(props.employee.AccessIncidents != 0){
        avg = props.employee.AccessTime / props.employee.AccessIncidents
        if(avg > 60){
           avg = avg / 60
           return(
            <div className="table">
            <div>
                 <h3><BiInfoCircle onClick={toggleInfo}/></h3> 
                 {showData && <Popup data={tickets} />} 
            </div>
            <h3>{props.employee.name}</h3>
            <h3>{props.employee.AccessIncidents}</h3>
            <h3>{avg.toFixed(2)} minutes</h3>
        </div>
           )
        }
    }
    else{
        avg = 0
    }

        return(
            <div className="table">
            <div>
                 <h3><BiInfoCircle onClick={toggleInfo}/></h3> 
                 {showData && <Popup data={tickets} />} 
            </div>
            <h3>{props.employee.name}</h3>
            <h3>{props.employee.AccessIncidents}</h3>
            <h3>{avg.toFixed(2)} seconds</h3>
        </div>
        )
   }

   else if(props.dataChoice == "Help"){
    if(props.employee.HelpIncidents != 0){
        var avg = props.employee.helpTime / props.employee.HelpIncidents
        if(avg > 60){
           avg = avg / 60
           return(
            <div className="table">
            <div>
                 <h3><BiInfoCircle onClick={toggleInfo}/></h3> 
                 {showData && <Popup data={tickets} />} 
            </div>
            <h3>{props.employee.name}</h3>
            <h3>{props.employee.HelpIncidents}</h3>
            <h3>{avg.toFixed(2)} minutes</h3>
        </div>
           )
        }
    }
    else{
      var  avg = 0
    }

        return(
            <div className="table">
            <div>
             
                 <h3><BiInfoCircle onClick={toggleInfo}/></h3> 
                 {showData && <Popup data={tickets} />} 
            </div>
            <h3>{props.employee.name}</h3>
            <h3>{props.employee.HelpIncidents}</h3>
            <h3>{avg.toFixed(2)} seconds</h3>
        </div>
        )
   }
   

   
   
   else{
    if(props.employee.FailCount != 0){
        avg = props.employee.FailTime / props.employee.FailCount
        if(avg > 60){
            avg = avg / 60
            return(
             <div className="table">
             <div>
                  <h3><BiInfoCircle onClick={toggleInfo}/></h3> 
                  {showData && <Popup data={tickets} />} 
             </div>
             <h3>{props.employee.name}</h3>
             <h3>{props.employee.FailCount}</h3>
             <h3>{avg.toFixed(2)} minutes</h3>
         </div>
            )
         }
    }
    else{
        avg = 0
    }

        return(
            <div className="table">
            <div>
                 <h3><BiInfoCircle onClick={toggleInfo}/></h3> 
                 {showData && <Popup data={tickets} />} 
            </div>
            <h3>{props.employee.name}</h3>
            <h3>{props.employee.FailCount}</h3>
            <h3>{avg.toFixed(2)} seconds</h3>
        </div>
        )
   


}

}
export default EmployeeStats;