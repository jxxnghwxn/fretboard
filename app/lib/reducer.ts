// reducer.js
export const initialSettings = {
  instrument: 'guitar',
  tuning: 'standard',
  accidental: 'flat',
  key: 'c',
  harmonySet: 'scale',
  system: 'ionian',
  fingerSystem: '3nps',
  fretRange: [0, 24],
  fretmarker: { note: 'note', degree: 'degree', none: 'none' },
};

export function settingsReducer(state, action) {
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
