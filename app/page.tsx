'use client';
import { useReducer } from 'react';

import SetFretboard from './components/SetFretboard';
import GetFretboard from './components/GetFretboard';
import { fretboardReducer, InitFretboardState } from './lib/FretboardState';

export default function Home() {
  const [fretboardState, updateFretboardState] = useReducer(
    fretboardReducer,
    InitFretboardState
  );

  return (
    <div>
      <SetFretboard
        fretboardState={fretboardState}
        updateFretboardState={updateFretboardState}
      />
      <GetFretboard fretboardState={fretboardState} />
    </div>
  );
}
