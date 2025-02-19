interface FretState {
  instrument: string;
  tuning: string;
  accidental: 'flat' | 'sharp';
  key: string;
  systemType: string;
  scaleType: string;
  chordType: string;
  fingerSystem: string;
  fretRange: [number, number];
  fretmarker: {
    note: string;
    degree: string;
    none: string;
  };
}

// reducer.ts
export const initFretState: FretState = {
  instrument: 'guitar',
  tuning: 'standard',
  accidental: 'flat',
  key: 'C',
  systemType: 'scale',
  scaleType: 'ionian',
  chordType: 'maj7',
  fingerSystem: '3NPS',
  fretRange: [1, 24],
  fretmarker: { note: 'note', degree: 'degree', none: 'none' },
};

export function fretStateReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_SETTING':
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      return state;
  }
}
