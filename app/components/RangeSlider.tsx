import { useState } from 'react';

// css
import s from '@/styles/RangeSlider.module.css';

export default function RangeSlider() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(24);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(e.target.value, maxValue);
    setMinValue(value);
  };
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(e.target.value, minValue);
    setMaxValue(value);
  };

  return (
    <div>
      <input
        type='range'
        id='input-left'
        className={s.input}
        min={0}
        max={24}
        value={minValue}
        onChange={handleMinChange}
      />
      <input
        type='range'
        id='input-right'
        className={s.input}
        min={0}
        max={24}
        value={maxValue}
        onChange={handleMaxChange}
      />

      <div className={s.slider}>
        <div className={s.track}></div>
        <div className={s.range}></div>
        <div className={`${s.thumb} ${s.left}`}></div>
        <div className={`${s.thumb} ${s.right}`}></div>
      </div>
    </div>
  );
}
