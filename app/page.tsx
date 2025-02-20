'use client';
import { useReducer } from 'react';

import FretboardSet from '@/components/FretboardSet';
import FretboardGet from '@/components/FretboardGet';
import { initFretState, fretStateReducer } from './lib/FretState';

export default function Home() {
  const [fretState, dispatch] = useReducer(fretStateReducer, initFretState);

  const updateFretState = (key, value) => {
    dispatch({ type: 'UPDATE_SETTING', payload: { key, value } });
  };

  return (
    <div>
      <FretboardSet fretState={fretState} updateFretState={updateFretState} />
      <FretboardGet fretState={fretState} />
    </div>
  );
}
