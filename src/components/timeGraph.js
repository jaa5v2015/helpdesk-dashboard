import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie, PieChart } from 'recharts';



export default class timeChart extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            data : this.props.data
        }
    }

  render() {
    
        return(
            <div>
                
                <ResponsiveContainer width="100%" height={600}>
              <BarChart
                width="100%"
                height={300}
                data={this.state.data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="4 3" />
                <XAxis style={{fontSize:"50%"}} dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                
                <Bar dataKey="value" stackId="a" fill="#D12500" />
      
              </BarChart>
            </ResponsiveContainer>
           </div>
          )
  }
        }