import { useState } from 'react';
import s from '@/styles/RangeSlider.module.css';

const RangeSlider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(24);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className={s.slider_container}>
      <div className={s.slider}>
        <div className={s.track}></div>
        <div className={s.range}></div>
        <div className={`${s.thumb} ${s.left}`}></div>
        <div className={`${s.thumb} ${s.right}`}></div>
      </div>

      {/* <div className='slider-track'>
        <div
          className='slider-range'
          style={{
            left: `${minValue}%`,
            right: `${maxValue}%`,
          }}
        />
      </div> */}
      <input
        type='range'
        min={0}
        max={24}
        value={minValue}
        onChange={handleMinChange}
        className='slider-input'
      />
      <input
        type='range'
        min={0}
        max={24}
        value={maxValue}
        onChange={handleMaxChange}
        className='slider-input'
      />
    </div>
  );
};

export default RangeSlider;
