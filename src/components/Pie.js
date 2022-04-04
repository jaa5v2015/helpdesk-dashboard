import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie, PieChart } from 'recharts';
import {useState, useEffect} from "react"
const COLORS = ['#479761','#0085D1', '#D12500']
const Pchart = props =>  {
    
      const [data, setData] = useState([])


      useEffect(()=>{
        setData(createObjects(props.data))
        
      }, [props.data])


      const createObjects = (data) =>{
        let email = {name:"email", count:0, helpCount:0, accessCount:0, failCount:0}
        let phone = {name:"phone", count:0, helpCount:0, accessCount:0, failCount:0}
        let other = {name:"other", count:0, helpCount:0, accessCount:0, failCount:0}
        var contacts = []
        
        data.map(employee =>{
          
          email.count += employee.emailCount
          phone.count += employee.phoneCount
          other.count += employee.otherCount
          email.helpCount += employee.helpEmail
          email.accessCount += employee.accessEmail
          email.failCount += employee.failEmail
    
          phone.helpCount += employee.helpPhone
          phone.accessCount += employee.accessPhone
          phone.failCount += employee.failPhone
    
          other.helpCount += employee.helpOther
          other.accessCount += employee.accessOther
          other.failCount += employee.failOther
          
        })
        contacts.push(email, phone, other)
       
        return contacts
      }
  

    if(props.dataChoice == "Total"){
        return (
        <div style={{height:"20%"}}>
                  <h1>Contact Type</h1>
                  <PieChart width={600} height={500}>
                  <Pie
                    data={data}
                    dataKey="count"
                    cx="50%"
                    cy="50%"
                    outerRadius={200}
                    >
                        
                        {data.map((entry, index) => 
                      <Cell fill={COLORS[index % COLORS.length]}/>
                    )}

                    </Pie>
                    
                <Legend/>
                <Tooltip/>
              </PieChart>
           </div>
          );
    }

    else if(props.dataChoice == "Access"){
        return (
           <div>
                <h1> Access Contact Type</h1>
                <PieChart width={600} height={500}>
                  <Pie
                    data={data}
                    dataKey="accessCount"
                    cx="50%"
                    cy="50%"
                    outerRadius={200}
                    fill="#82ca9d">

                        {data.map((entry, index) => 
                      <Cell fill={COLORS[index % COLORS.length]}/>
                    )}

                  </Pie>
                  <Legend/>
                  <Tooltip/>
              </PieChart>
           </div>
          );
    }
   else if(props.dataChoice == "Help"){
        return (
            <div>
                  <h1> Help / Assistance Contact Type</h1>
                  <PieChart width={600} height={500}>
                  <Pie
                    data={data}
                    dataKey="helpCount"
                    cx="50%"
                    cy="50%"
                    outerRadius={200}
                    fill="#82ca9d">
                        {data.map((entry, index) => 
                      <Cell fill={COLORS[index % COLORS.length]}/>
                    )}
                  </Pie>
                    <Legend/>
                <Tooltip/>
              </PieChart>
            </div>
          );
    }

    else if(props.dataChoice == "Fail"){
        return (
            <div>
                <h1>Failure Contact Type</h1>
                
              <PieChart width={600} height={500}>
                  <Pie
                  
                    data={data}
                    dataKey="failCount"
                    cx="50%"
                    cy="50%"
                    outerRadius={200}
                    fill="#82ca9d">
                          {props.data.map((entry, index) => 
                      <Cell fill={COLORS[index % COLORS.length]}/>
                    )}
                  </Pie>
                    <Legend/>
                <Tooltip/>
              </PieChart>
                
            
            </div>
          );
    }

    else {
      return(
        <h1>Could not Load data</h1>
      )
    }
}



export default Pchart;