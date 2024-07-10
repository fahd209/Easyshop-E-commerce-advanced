import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ColorDropDown = () => {
    const [color, setColor] = useState('');
    const COLORS = ['All','Red', 'Blue', 'Green', 'Orange']

    const handleColorChange = (event) => {
        const newColorValue = event.target.value;
        setColor(newColorValue)
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
