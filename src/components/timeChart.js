import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie, PieChart } from 'recharts';
import {useState, useEffect} from "react"
import Graph from './graph';

const TimeGraph = props =>{
    const [time, setTime] = useState([])
    const [timeJson, setJson] = useState([])
    const [data, setData] = useState([])
    var t = []
    var json = []

  useEffect( ()=>{

     
     
      
    setJson(getTimes(props.data))
      
    
      
    
   },[props])


  const getTimes = (data) =>{
    var timeList = []
    var times = []
    
   data.map(emp =>{
      emp.createdOn.map(tim =>{
        
        timeList.push(tim)
      })
   })
   
   

    timeList.map(time =>{
     var x = time
     
      if(x != ''){
      
       time=  parseInt(time)
       times.push(time)
      }
      

      
    })
    var t = times.sort(function(a,b){return(a-b)})

    var json = createTimejson(times.sort(function(a,b){return(a-b)}))
   

    
    return json
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
        
        let ti = {time: t, value: count}
        tim.push(ti)
          
    
        
        
        count = 1
        t = time
      }
    })
    let ti = {time: t, value: count}
    tim.push(ti)
    
   
    return tim
  }

 
  if(timeJson.length == 0 ){
    return (
    
      <div>
        
          <h1>Cant load data</h1>
          
      </div>
     );
  }
  else{
    return (
    
      <div>
        
          <Graph data = {timeJson} dataChoice={"Time"}/>
          
      </div>
     );
  }

}

export default TimeGraph;