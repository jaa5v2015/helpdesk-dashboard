
import React, {useState, useEffect} from "react"
import Table from "../src/components/table"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

import Graph from "./components/graph"
import {Resizable, ResizableBox} from "react-resizable";
import Dashboard from "./components/Dashboard";





const App = () => {

  const [data, setData] = useState([])
  const [dataChoice, chooseData]= useState("Total")
  
  const [time, setTime] = useState([])
  const [timeJson, setJson] = useState([])

  
  useEffect(()=>{
    fetch("/members").then(
      res => res.json()
    ).then(
      data=> {
        setData(data)
        
      }
    )
     
     
      var t = getTimes(data)
      setTime(t)
      var json = createTimejson(t)
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
      console.log(time.split('.')[0])
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
   
         <div className="App">
      <Stack direction="row" spacing={2}>
      
      <Button variant="contained"   onClick={()=>chooseData("Total")}>Total Incidents</Button>
         <Button variant="contained"  onClick={()=>chooseData("Access")}>Access Incident</Button>
         <Button variant="contained"  onClick={()=>chooseData("Help")}>Help / Assistance Incidents</Button>
         <Button variant="contained"   onClick={()=>chooseData("Fail")}>Failure Incidents</Button>
      
      </Stack>

      <div className="grid-container">
            {console.log(timeJson)}
            <Dashboard data={data} dataChoice={dataChoice}  time={timeJson}/>
      </div>
    </div>

  
  );
}

export default App;
