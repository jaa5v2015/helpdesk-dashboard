import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {useState, useEffect} from "react";
import DropMenu from './DropMenu';
import Button from '@mui/material/Button';
import "../App.css";
import { AiFillContacts } from 'react-icons/ai';

const SearchFilter = props => {
  const [choice, setChoice] = useState("pick")
  const [assingedList, setAssigned] = useState([])
  const [contactList, setContact] = useState([])
  const [categoryList, setCategory] = useState([])
  const [callerList, setCaller] = useState([])
  const [stateList, setStateList] = useState([])
  const [options, setOptions] = useState(props.data)
  const [filters, setFilters] = useState([])
  const [update, reUpdate] = useState(false)
  const [showDrop, setDrop] = useState(false)
  
  useEffect(()=>{
    
    var assigned = []
    var contact = []
    var category = []
    var caller = []
    var state = []
    //Gets different options for dropdown menu
    props.data.map(ticket =>{
      if(assigned.includes(ticket.assignedTo) == false){
        assigned.push(ticket.assignedTo)
      }

      if(contact.includes(ticket.contactType) == false){
        contact.push(ticket.contactType)
      }

      if(category.includes(ticket.category) == false){
        category.push(ticket.category)
      }

      if(caller.includes(ticket.caller) == false){
        caller.push(ticket.caller)
      }

      if(state.includes(ticket.state) == false){
        state.push(ticket.state)
      }
      


      setAssigned(assigned)
      setContact(contact)
      setCategory(category)
      setCaller(caller)
      setStateList(state)


    })
    
  }, [props.data, showDrop])


  const getFilterData = (f) =>{
    props.filter(filters)
    
    props.toggle()

  }

  const readFilters = (f,n) =>{
    filters[n] = f
    
  }
  const toggleDrop = () =>{
    setDrop(!showDrop)
  }
  return(
      <div className='popup'>
                
          <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <h3>Assigned To</h3>
              <DropMenu data={assingedList}  filter={readFilters} num={0} />
          </div>
          <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <h3>Caller</h3>
              <DropMenu data={callerList} filter={readFilters} num={1}/>
          </div>
          <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <h3>Contact Type</h3>
              <DropMenu data={contactList} filter={readFilters} num={2} />
          </div>
          <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <h3>State</h3>
              <DropMenu data={stateList}  filter={readFilters} num={3}/>
          </div>
          <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <h3>Category</h3>
              <DropMenu data={categoryList} filter={readFilters} num={4}/>
          </div>
          <div>
            <Button onClick={getFilterData} variant="contained">Apply</Button>
          </div>

      </div>
  );

}


export default SearchFilter;