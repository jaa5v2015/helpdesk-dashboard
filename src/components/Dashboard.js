import {Resizable, ResizableBox} from "react-resizable";
import Graph from "./graph";
import React, { useEffect, useState } from "react";
import "../App.css";
import Pchart from "./Pie"
import  RGL, {WidthProvider} from "react-grid-layout";
import Table from "./table";
import TimeGraph from "./timeChart";
import IncidentPage from "./IncidentPage";
import Incident from "./incident";
import EmployeeStats from "./employeeStats";
import { AiOutlineConsoleSql } from "react-icons/ai";




const Dashboard = props =>{

  const [tickets, setTix] = useState([])
  const [empData, setEmps] = useState([])
  const [filterDate, setFilterDate] = useState(props.filterDate)
  const [data, setData] = useState(props.data)
  const [date, setDate] = useState(props.date)

  useEffect( async () =>{
    let isMounted = true;
    var ticketList = []
    //Set all tickets
    props.data.map(emp =>{
      emp.tickets.map(ticket =>{
          ticketList.push(ticket)
          var date = new Date(ticket.timeCreated)
          ticket.timeCreated = date;
      })
    })
    setTix(ticketList)

    //Create data based on filter date
    let filter = ticketList.filter(ticket => ticket.timeCreated <= props.date && ticket.timeCreated >= props.filterDate )
    setTix(filter)
    setEmps(setEmpData(filter))
  
  },[props])

  const setEmpData = (t) =>{
    let empList = []
    let subCats = []
    let contactList = []
    let name = t[0].assignedTo
    let count = 0
    let AccessIncidents = 0
    let AccessTime =0
    let HelpIncidents = 0
    let helpTime = 0
    let FailCount = 0
    let failTime = 0
    let time = 0
    let contactType = 0
    let createdOn = 0
    let emailCount = 0
    let phoneCount = 0
    let otherCount = 0
    let accessEmail = 0
    let accessPhone = 0
    let accessOther = 0
    let helpEmail = 0
    let helpPhone =0
    let helpOther =0
    let failEmail = 0
    let failPhone = 0
    let failOther = 0
    let passwordReset = 0;
    let assistanceHardware = 0;
    let assistanceSoftware = 0;
    let infoRequest = 0;
    let unlockAccout = 0
    let serviceDown = 0;
    let serviceDegradation = 0;
    let tickets = []
    let hours = []



  for(let i = 0; i < t.length; i++){
      if(name == t[i].assignedTo){
        count += 1;
        time += parseInt(t[i].resolveTime)
        hours.push(t[i].timeCreated.getHours())
        tickets.push(t[i])
        
        
        if(t[i].category == "Access"){
          AccessIncidents += 1
          AccessTime += parseInt(t[i].resolveTime)
          if(t[i].subcategory == "Password Reset"){
              passwordReset += 1

          }

          else{
            unlockAccout +=1
          }


          if(t[i].contactType == "Email"){
            accessEmail += 1
            emailCount += 1
          }
          else if(t[i].contactType == "Phone"){
              accessPhone += 1
              phoneCount += 1
          }
          else{
            accessOther += 1
            otherCount += 1
          }
        }

        else if(t[i].category == "Help / Assistance"){
          HelpIncidents += 1;
          helpTime += parseInt(t[i].resolveTime);

          if(t[i].subcategory == "Assistance using Application / Software"){
            assistanceSoftware += 1
          }
          else if(t[i].subcategory == "Information Request"){
            infoRequest += 1
          }
          else{
            assistanceHardware += 1
          }
          if(t[i].contactType == "Email"){
            helpEmail += 1
            emailCount += 1
          }
          else if(t[i].contactType == "Phone"){
              helpPhone += 1
              phoneCount += 1
          }
          else{
            helpOther += 1
            otherCount += 1
          }
        }

        else{
          FailCount += 1
          failTime += parseInt(t[i].resolveTime)
          if(t[i].subcategory == "Service Down"){
            serviceDown += 1
          }
          else{
            serviceDegradation += 1
          }
          if(t[i].contactType == "Email"){
            failEmail += 1
            emailCount += 1

          }
          else if(t[i].contactType == "Phone"){
              failPhone += 1
              phoneCount += 1
              
          }
          else{
            failOther += 1
            otherCount += 1
          }
        }

      }
      else{
        let emp = {
          name: name,
          Incidents: count,
          AccessIncidents: AccessIncidents,
          HelpIncidents: HelpIncidents,
          FailCount: FailCount,
          AccessTime: AccessTime,
          helpTime: helpTime,
          FailTime: failTime,
          time: time,
          contactType: contactList,
          accessEmail: accessEmail,
          accessOther: accessOther,
          accessPhone: accessPhone,
          helpEmail: helpEmail,
          helpPhone: helpPhone,
          helpOther: helpOther,
          passwordReset: passwordReset,
          assistanceHardware: assistanceHardware,
          assistanceSoftware: assistanceSoftware,
          infoRequest: infoRequest,
          unlockAccount: unlockAccout,
          serviceDown: serviceDown,
          serviceDegradation: serviceDegradation,
          tickets: tickets,
          avgTime: time / count,
          avgAccessTime: AccessTime/AccessIncidents,
          avgHelpTime: HelpIncidents/HelpIncidents,
          avgFailTime: failTime/ FailCount,
          emailCount: emailCount,
          phoneCount: phoneCount,
          otherCount: otherCount,
          createdOn: hours,
          failPhone: failPhone,
          failEmail: failEmail,
          failOther: failOther

        }
        
        empList.push(emp)

        
        subCats = []
        contactList = []
        name = t[i].assignedTo
        count = 1
        AccessIncidents = 0
        AccessTime =0
        HelpIncidents = 0
        helpTime = 0
        FailCount = 0
        failTime = 0
        time = 0
        contactType = 0
        createdOn = 0
        emailCount = 0
        phoneCount = 0
        otherCount = 0
        accessEmail = 0
        accessPhone = 0
        accessOther = 0
        helpEmail = 0
        helpPhone =0
        helpOther =0
        failEmail = 0
        failPhone = 0
        failOther = 0
        passwordReset = 0;
        assistanceHardware = 0;
        assistanceSoftware = 0;
        infoRequest = 0;
        unlockAccout = 0
        serviceDown = 0;
        serviceDegradation = 0;
        tickets = [];
        tickets.push(t[i]);
        emailCount = 0;
        phoneCount = 0;
        otherCount = 0;
        hours = []
        hours.push(t[i].timeCreated.getHours())
        if(t[i].category == "Access"){
          AccessIncidents = 1
          AccessTime += parseInt(t[i].resolveTime)
          if(t[i].subcategory == "Password Reset"){
              passwordReset += 1

          }

          else{
            unlockAccout +=1
          }


          if(t[i].contactType == "Email"){
            accessEmail += 1
            emailCount += 1
          }
          else if(t[i].contactType == "Phone"){
              accessPhone += 1
              phoneCount += 1
          }
          else{
            accessOther += 1
            otherCount += 1
          }
        }

        else if(t[i].category == "Help / Assistance"){
          HelpIncidents += 1;
          helpTime += parseInt(t[i].resolveTime);

          if(t[i].subcategory == "Assistance using Application / Software"){
            assistanceSoftware += 1
          }
          else if(t[i].subcategory == "Information Request"){
            infoRequest += 1
          }
          else{
            assistanceHardware += 1
          }
          if(t[i].contactType == "Email"){
            helpEmail += 1
            emailCount += 1
          }
          else if(t[i].contactType == "Phone"){
              helpPhone += 1
              phoneCount += 1
          }
          else{
            helpOther += 1
            otherCount += 1
          }
        }

        else{
          FailCount += 1
          failTime += parseInt(t[i].resolveTime)
          if(t[i].subcategory == "Service Down"){
            serviceDown += 1
          }
          else{
            serviceDegradation += 1
          }
          if(t[i].contactType == "Email"){
            failEmail += 1
            emailCount += 1

          }
          else if(t[i].contactType == "Phone"){
              failPhone += 1
              phoneCount += 1
          }
          else{
            failOther += 1
            otherCount += 1
          }
        }



      }
  }

  let emp = {
    name: name,
    Incidents: count,
    AccessIncidents: AccessIncidents,
    HelpIncidents: HelpIncidents,
    FailCount: FailCount,
    AccessTime: AccessTime,
    helpTime: helpTime,
    FailTime: failTime,
    time: time,
    contactType: contactList,
    accessEmail: accessEmail,
    accessOther: accessOther,
    accessPhone: accessPhone,
    helpEmail: helpEmail,
    helpPhone: helpPhone,
    helpOther: helpOther,
    passwordReset: passwordReset,
    assistanceHardware: assistanceHardware,
    assistanceSoftware: assistanceSoftware,
    infoRequest: infoRequest,
    unlockAccount: unlockAccout,
    serviceDown: serviceDown,
    serviceDegradation: serviceDegradation,
    tickets: tickets,
    avgTime: time / count,
    avgAccessTime: AccessTime/AccessIncidents,
    avgHelpTime: HelpIncidents/HelpIncidents,
    avgFailTime: failTime/ FailCount,
    emailCount: emailCount,
    phoneCount: phoneCount,
    otherCount: otherCount,
    createdOn: hours,
    failPhone: failPhone,
    failEmail: failEmail,
    failOther: failOther
  }

  empList.push(emp)
  
  return empList
}


if(props.dataChoice != "Incidents"){
  return(
    
    <div className="grid-container">
        
        <div style={{display:"flex", flexDirection:'column', width:"90%",height:"95%", overflowY: "scroll"}}>
            <div className="table">
                <h3>Info</h3>
                <h3>Employee</h3>
                <h3> {props.dataChoice} Incidents</h3>
                <h3>Avg resolve Time</h3>
                
                
    
            </div>
            {
              empData.map(emp =>
                
                <EmployeeStats employee={emp} dataChoice={props.dataChoice} />
              )
            }
        </div> 
          
        <div className="graph">
            <Graph data={empData} dataChoice={props.dataChoice}/>
            

        </div>
        <div className="graph">
         <TimeGraph data={empData} dataChoice={props.dataChoice} filterDate={props.filterDate}/>
            

        </div>
        <div className="graph">
            <Pchart data={empData} dataChoice={props.dataChoice}/>
        </div>
       
    </div>
  )
}

else{
  return(
   <div>
       
       <IncidentPage data={tickets} dataChoice={props.dataChoice} filterDate={props.filterDate} />
   </div>
  )
}
}


export default Dashboard;