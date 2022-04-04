import {Resizable, ResizableBox} from "react-resizable";
import Graph from "./graph";
import React from "react";
import "../App.css";
import Pchart from "./Pie"
import  RGL, {WidthProvider} from "react-grid-layout";
import Table from "./table";
import TimeGraph from "./timeChart";
import IncidentPage from "./IncidentPage";
import Incident from "./incident";
import EmployeeStats from "./employeeStats";




export default class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            width: "100%",
            height: "100%",
            empData: [],
            tickets: [],

        }
    }

    setEmpData(t){
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



    for(let i = 0; i < t.length; i++){
        if(name == t[i].assignedTo){
          count += 1;
          time += t[i].resolveTime
          tickets.push(t[i])
          if(t[i].category == "Access"){
            AccessIncidents += 1
            AccessTime += t[i].resolveTime
            if(t[i].subcategory == "Password Reset"){
                passwordReset += 1

            }

            else{
              unlockAccout +=1
            }


            if(t[i].contactType == "Email"){
              accessEmail += 1
            }
            else if(t[i].category == "Phone"){
                accessPhone += 1
            }
            else{
              accessOther += 1
            }
          }

          else if(t[i].category == "Help / Assistance"){
            HelpIncidents += 1;
            helpTime += t[i].resolveTime;

            if(t[i].subcategory == "assistanceSoftware"){
              assistanceSoftware += 1
            }
            else if(t[i].subcategory == "infoRequest"){
              infoRequest += 1
            }
            else{
              assistanceHardware += 1
            }
            if(t[i].contactType == "Email"){
              helpEmail += 1
            }
            else if(t[i].category == "Phone"){
                helpPhone += 1
            }
            else{
              helpOther += 1
            }
          }

          else{
            FailCount += 1
            failTime += t[i].resolveTime
            if(t[i].subcategory == "serviceDown"){
              serviceDown += 1
            }
            else{
              serviceDegradation += 1
            }
            if(t[i].contactType == "Email"){
              failEmail += 1
            }
            else if(t[i].category == "Phone"){
                failPhone += 1
            }
            else{
              failOther += 1
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
            unlockAccout: unlockAccout,
            serviceDown: serviceDown,
            serviceDegradation: serviceDegradation,
            tickets: tickets

          }
          
          empList.push(emp)
          subCats = []
          contactList = []
          name = t[i].assignedTo
          count = 0
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
          failOther  = 0
          tickets = []
          
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
      unlockAccout: unlockAccout,
      serviceDown: serviceDown,
      serviceDegradation: serviceDegradation,
      tickets: tickets

    }
  
    empList.push(emp)
    console.log(empList)
    return(empList)
  }
  
  componentDidMount(){
    this.setState({tickets: this.props.tickets})
   
  }
   
    
    render(){
       if(this.props.dataChoice != "Incidents"){
        return(
            <div className="grid-container">
                <div style={{display:"flex", flexDirection:'column', width:"90%",height:"95%", overflowY: "scroll"}}>
                    <div className="table">
                            <h3>Info</h3>
                            <h3>Employee</h3>
                            <h3> {this.props.dataChoice} Incidents</h3>
                            <h3>Avg resolve Time</h3>
                    
                    </div>

                
                        {
                            this.props.activeData.map(emp =>
                                <EmployeeStats employee={emp} dataChoice={this.props.dataChoice}/>
                            )
                        }
                    
                </div>
                        {console.log(this.state.empData)}
               <div className="graph">
                    
               <Graph data={this.props.data} dataChoice={this.props.dataChoice}/> 
               </div>
               <div className="graph">
               <TimeGraph data={this.props.data} dataChoice={this.props.dataChoice}/> 
               </div>
               <div className="graph">
               <Pchart data={this.props.data} dataChoice={this.props.dataChoice}/>
               </div>
               
            </div>
        );
       }
       else{
           return(
            <div>
               
                <IncidentPage data={this.props.tickets} dataChoice={this.props.dataChoice} />
            </div>
           )
       }
    }



}