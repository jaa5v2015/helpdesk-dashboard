import '../App.css'
import {useState} from 'react';
import { BiInfoCircle } from "react-icons/bi";
import Popup from './popup';
import { VscChevronDown } from "react-icons/vsc";
const Incident = props =>{
    const [showData, toggleData] = useState(false);
    
    
    const toggleInfo= () =>{
        toggleData(!showData)
    }

    

    

    return(
        
        <div class="incident">
        
            <div onClick={toggleInfo}> <BiInfoCircle/> {showData && <Popup data={props.data} choice={"incident"}/>} </div>

            <p1>{props.data.assignedTo} </p1>
            <p1>{props.data.caller}</p1>
            <p1>{props.data.timeCreated.getMonth() + 1}/{props.data.timeCreated.getDate()}/{props.data.timeCreated.getFullYear()}</p1>
            <p1>{props.data.contactType}</p1>
            <p1>{props.data.state}</p1>
            <p1>{props.data.category}</p1>
            
           
            
        </div>
        
    )
}

export default Incident;