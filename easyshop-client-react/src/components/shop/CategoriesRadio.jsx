import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const CategoriesRadio = ( { handleSearchFilterChange } ) => {

  const handleChange = (e) => {
    handleSearchFilterChange(e)
  }

  return (
    <div>
      <FormControl>
        <FormLabel sx={{ fontSize: '20px' }} id="category-radio-group-label">Category</FormLabel>
        <RadioGroup
          aria-labelledby="category-radio-group-label"
          name="categoryId"
          onChange={handleChange}
        >
          <FormControlLabel value='All' control={<Radio />} label="All" />
          <FormControlLabel value={1} control={<Radio />} label="Electronics" />
          <FormControlLabel value={2} control={<Radio />} label="Fashion" />
          <FormControlLabel value={3} control={<Radio />} label="Home & Kitchen" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default CategoriesRadio
