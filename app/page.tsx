'use client';
import { useReducer } from 'react';

import GetFretboard from './components/GetFretboard';
import { fretboardReducer, InitFretboardState } from './lib/FretboardSettings';

import FretboardGet from './components/FretboardGet';

export default function Home() {
  const [fretboardState, updateFretboardState] = useReducer(
    fretboardReducer,
    InitFretboardState
  );

  return (
    <div>
      <GetFretboard fretboardState={fretboardState} />
      {/* <FretboardGet fretboardState={fretboardState} /> */}
    </div>
  );
}
