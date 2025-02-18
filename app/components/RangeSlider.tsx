import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider({ settings, updateSetting }) {
  const [value, setValue] = React.useState<number[]>(settings.fretRange);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    updateSetting('fretRange', newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        min={0}
        max={24}
      />
    </Box>
  );
}
