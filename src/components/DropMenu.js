import * as React from 'react';
import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropMenu = props =>{
  const [filter, setfilter] = React.useState('');
  const [chosen, filterChosen] = useState(false)
  
  
  useEffect(()=>{
    
    if(chosen == false){
      
      
      props.filter("None", props.num)
    }
    else{
      props.filter(filter, props.num)
    }
  }, [filter])

  const handleChange = (event) => {
    setfilter(event.target.value);
    filterChosen(true)
    
  };
  
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{filter}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label={filter}
          onChange={handleChange}
        >
            
        {
          props.data.map(emp =>{
            return(
              <MenuItem value={emp}>{emp}</MenuItem>

            )
          })
        }
            
        
        </Select>
      </FormControl>
    </Box>
  );
}

export default DropMenu;