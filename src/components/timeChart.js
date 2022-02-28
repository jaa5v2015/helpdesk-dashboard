import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie, PieChart } from 'recharts';
import {useState, useEffect} from "react"

const TimeChart = props =>{
    const [time, setTime] = useState([])
  const [timeJson, setJson] = useState([])
  const [data, setData] = useState([])
  
  useEffect(()=>{

        setData(props.data)
      var t = getTimes(props.data)
      setTime(t)
      var json = createTimejson(time)
      setJson(json)
  
       
    
    


  })


  const getTimes = (data) =>{
    var timeList = []
    
    var times = []
   data.map(emp =>{
      emp.createdOn.map(tim =>{
        
        timeList.push(tim)
      })
   })
   
   

    timeList.map(time =>{
      times.push(parseInt(time.split('.')[0]))
      
    })
     
    return times.sort(function(a,b){return(a-b)})
  }


  const createTimejson = (data) =>{
    var t = data[0]
    var tim = []
    var count = 0
    data.map(time =>{
      if(t == time){
        count += 1
      }
      else{

        if(t > 12){
          let ti = {time: t-12, value: count}
          tim.push(ti)
          
        }
        else{
          let ti = {time: t, value: count}
          tim.push(ti)
          
        }
        
        
        count = 0
        t = time
      }
    })
    return tim
  }

  return (
    <div>
       {console.log("Hello")}
         <h3>Number of Calls per Hour</h3>
         {console.log(timeJson)}
         <ResponsiveContainer width="100%" height={600}>
       <BarChart
         width="100%"
         height={300}
         data={timeJson}
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

export default TimeChart;