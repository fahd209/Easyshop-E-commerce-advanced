import React, { useEffect, useState } from 'react'
import { FormLabel, TextField } from '@mui/material';
import Slider from '@mui/material/Slider';
import useFilter from '../hooks/useFilter';

function valuetext(value) {
    return `${value}°C`;
  }  

const PriceRangeSwiper = ( { handlePriceRange } ) => {
    const [sliderValue, setSliderValue] = useState([0,1500]);
    const [minValue, setMinValue] = useState(sliderValue[0]);
    const [maxValue, setMaxValue] = useState(sliderValue[1]);
    
 
    const handleChange = (event, newValue) => {
        setSliderValue(newValue) // update slide value
        setMinValue(newValue[0]) // updates minValue when the min value of the slider changes
        setMaxValue(newValue[1]) // updates maxValue when the min value of the slider changes
    }

    const handleMinValueChange = (event) => {
        const newMinValue = Number(event.target.value); // getting min value
        setMinValue(newMinValue) // sets min value state to new minValue
        setSliderValue([newMinValue, sliderValue[1]]) // sets the slider minValue to newMinValue, max value says the same
    }

    const handMaxValueChange = (event) => {
        const newMaxValue = Number(event.target.value); // getting newMaxValue
        setMaxValue(newMaxValue); // setting the maxValue to the new maxValue
        setSliderValue([sliderValue[0], newMaxValue]); // setting slider maxValue to the newMaxValue
    }

    // when min or max values change call the handleSearchFilter
    useEffect(() => {
        handlePriceRange(minValue, maxValue)
    }, [minValue, maxValue])



  return (
    <div className=''>
        <FormLabel sx={{fontSize: '20px'}} >Price range</FormLabel>
            <div className='priceRange-controller'>
            
                <div className='priceRange-textField'>
                    <TextField
                        sx={{width: '120px', margin: '10px'}}
                        id="outlined-number"
                        onChange={handleMinValueChange}
                        value={minValue}
                        minValue={0}
                        name='minPrice'
                        label="Min"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField
                        sx={{width: '120px', margin: '10px'}}
                        id="outlined-number"
                        value={maxValue}
                        onChange={handMaxValueChange}
                        maxValue={1500}
                        label="Max"
                        name='maxPrice'
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}

                    />
                </div>

                <Slider sx={{ width: '80%', marginBottom: '10px'}}
                    getAriaLabel={() => 'Price Range'}
                    value={sliderValue}
                    onChange={handleChange}
                    getAriaValueText={valuetext}
                    valueLabelDisplay='auto'
                    max={1500}
                />
            </div>
    </div>
  )
}

export default PriceRangeSwiper
