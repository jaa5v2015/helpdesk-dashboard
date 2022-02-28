import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie, PieChart } from 'recharts';



export default class Graph extends PureComponent {
   

  render() {
    if(this.props.dataChoice == "Total"){
        return (
           <div>
                {console.log(this.props.data)}
                <h3>Volume of Total Incidents per Employee</h3>
                <ResponsiveContainer width="100%" height={600}>
              <BarChart
                width="100%"
                height={300}
                data={this.props.data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                
              >
                <CartesianGrid strokeDasharray="4 3" />
                <XAxis style={{fontSize:"50%"}}   dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                
                <Bar dataKey="AccessIncidents" stackId="a" fill="#479761" />
                <Bar dataKey="HelpIncidents" stackId="a" fill="#0085D1" />
                <Bar dataKey="FailCount" stackId="a" fill="#D12500" />
      
              </BarChart>
            </ResponsiveContainer>
           </div>
          );
    }

    else if(this.props.dataChoice == "Access"){
        return (
           <div >
                  <h3>Volume of Access Incidents per Employee</h3>
                <ResponsiveContainer width="100%" height={600}>
              <BarChart
                width="100%"
                height={300}
                data={this.props.data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis style={{fontSize:"50%"}}   dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                
                <Bar dataKey="passwordReset" stackId="a" fill="#479761" />
                <Bar dataKey="unlockAccount" stackId="a" fill="#0085D1" />

                
      
              </BarChart>
            </ResponsiveContainer>
           </div>
          );
    }
   else if(this.props.dataChoice == "Help"){
        return (
            <div>
                <h3>Volume of Help / Assistance Incidents per Employee</h3>
                <ResponsiveContainer width="100%" height={600}>
              <BarChart
                width="100%"
                height={300}
                data={this.props.data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="4 3" />
                <XAxis style={{fontSize:"50%"}}   dataKey="name" />
                <YAxis   />
                <Tooltip />
                <Legend />
                
                <Bar dataKey="assitanceSoftware" stackId="a" fill="#479761" />
                <Bar dataKey="assistanceHardware" stackId="a" fill="#0085D1" />
                <Bar dataKey="infoRequest" stackId="a" fill="#D12500" />
      
              </BarChart>
            </ResponsiveContainer>
            </div>
          );
    }

    else if(this.props.dataChoice == "Fail"){
        return (
          <div>
            <h3>Volume of Failure Incidents per Employee</h3>
          <ResponsiveContainer width="100%" height={600}>
        <BarChart
          width="100%"
          height={300}
          data={this.props.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 3" />
          <XAxis style={{fontSize:"50%"}}  dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          <Bar dataKey="serviceDown" stackId="a" fill="#479761" />
          <Bar dataKey="serviceDegradation" stackId="a" fill="#0085D1" />
          

        </BarChart>
      </ResponsiveContainer>
      </div>
          );
    }

    else if(this.props.dataChoice == "Time"){
      return (
         <div>
         
              <h3>Number of Calls per Hour</h3>
              <ResponsiveContainer width="100%" height={600}>
            <BarChart
              width="100%"
              height={300}
              data={this.props.time}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="8 3" />
              <XAxis style={{fontSize:"70%"}} stroke="#0085D1"  dataKey="time" />
              <YAxis stroke="#0085D1"   />
              <Tooltip fontSize="20px"/>
              
              
              <Bar dataKey="value" stackId="a" stroke="#0085D1" fill="#0085D1" />
              
    
            </BarChart>
          </ResponsiveContainer>
         </div>
        );
  }
}
}
