import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SortByDropDown = () => {
    const [sortOption, setSortOption] = useState('')

    const handleSortOptionChange = (event) => {
        const sortValue = event.target.value;
        setSortOption(sortValue)
    }

  return (
    <div>
        <FormControl  fullWidth>
                <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sortOption}
                        label="Sort by"
                        onChange={handleSortOptionChange}
                    >
                        <MenuItem value='All' >All</MenuItem>
                        <MenuItem value='Low to high' >Low to high</MenuItem>
                        <MenuItem value='High to low'>High to low</MenuItem>
                        <MenuItem value='Newest'>Newest</MenuItem>
                        <MenuItem value='Oldest'>Oldest</MenuItem>
                    </Select>
        </FormControl>
    </div>
  )
}

export default SortByDropDown
