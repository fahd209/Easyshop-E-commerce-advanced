import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const CategoriesRadio = () => {

  const handleChange = (event) =>{
    const value = event.target.value;
    console.log(value)
  }

  return (
    <div>
        <FormControl>
        <FormLabel sx={{fontSize: '20px'}} id="demo-radio-buttons-group-label">Category's</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
            onChange={handleChange}
        >
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel value="Electronic's" control={<Radio />} label="Electronic's" />
            <FormControlLabel value="Fashion" control={<Radio />} label="Fashion" />
            <FormControlLabel value="Home & Kitchen" control={<Radio />} label="Home & Kitchen" />
        </RadioGroup>
        </FormControl>
      
    </div>
  )
}

export default CategoriesRadio
