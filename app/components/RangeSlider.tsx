import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}`;
}

export default function RangeSlider({ fretboardState, updateFretboardState }) {
  const [value, setValue] = React.useState<number[]>(fretboardState.range.fret);

  const handleChange = (event: Event, newValue: number[]) => {
    setValue(newValue as number[]);
    updateFretboardState({
      type: 'SET_RANGE',
      payload: {
        string: fretboardState.range.string,
        fret: newValue as number[],
      },
    });
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Fret range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        min={1}
        max={24}
      />
    </Box>
  );
}
