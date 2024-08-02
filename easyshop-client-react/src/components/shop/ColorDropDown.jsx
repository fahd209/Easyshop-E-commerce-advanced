import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useFilter from '../hooks/useFilter';

const ColorDropDown = ({ handleSearchFilterChange  }) => {
    const [color, setColor] = useState('');
    const COLORS = [
            'All',
            'Black',
            'Gray',
            'White',
            'Silver',
            'Charcoal',
            'Blue',
            'Dark Blue',
            'Tan',
            'Brown',
            'Olive',
            'Turquoise',
            'Orange',
            'Red',
            'Navy',
            'Khaki',
            'Mint',
            'Lavender',
            'Teal',
            'Maroon',
            'Yellow',
            'Pink',
            'Burgundy',
            'Clear',
            'Green'
        ]

    const handleColorChange = (event) => {
        const newColorValue = event.target.value;
        setColor(newColorValue)
        handleSearchFilterChange(event)
    }

  return (
    <div>
        <FormControl  fullWidth>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={color}
                    label="Color"
                    name='color'
                    onChange={handleColorChange}
                    
                >
                    {
                        COLORS.map((colors, index) => (
                            <MenuItem sx={{display: 'flex', justifyContent: 'space-between'}} key={index} value={colors} >
                             {colors}
                            {
                                colors != "All" ? (
                                <div style={{width: '20px', height: '20px', backgroundColor: colors, borderRadius: '50%'}}>
                                </div>
                                ) : ( null )
                            }
                            </MenuItem>
                        ))
                    }
            </Select>
      </FormControl>
    </div>
  )
}

export default ColorDropDown
