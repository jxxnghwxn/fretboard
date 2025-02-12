export const notes = {
  flat: ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'],
  sharp: ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
};

export const degrees = {
  flat: ['1', '♭2', '2', '♭3', '3', '4', '♭5', '5', '♭6', '6', '♭7', '7'],
  sharp: ['1', '♯1', '2', '♯2', '3', '4', '♯4', '5', '♯5', '6', '♯6', '7'],
};

export const instruments = {
  guitar: { label: 'Guitar', nbStrings: 6 },
  guitar_7: { label: '7-string guitar', nbStrings: 7 },
  bass: { label: 'Bass', nbStrings: 4 },
  bass_5: { label: '5-string bass', nbStrings: 5 },
};

export const tunings = {
  guitar: {
    standard: ['E', 'A', 'D', 'G', 'B', 'E'],
    drop_d: ['D', 'A', 'D', 'G', 'A', 'D'],
  },
  guitar_7: {
    standard: ['B', 'E', 'A', 'D', 'G', 'B', 'E'],
  },
  bass: {
    standard: ['E', 'A', 'D', 'G'],
  },
  bass_5: {
    standard: ['B', 'E', 'A', 'D', 'G'],
    standard_high: ['E', 'A', 'D', 'G', 'C'],
  },
};

export const systems = {
  chromatic: {
    label: 'Chromatic',
    degree: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
  ionian: { label: 'Ionian', degree: [0, 2, 4, 5, 7, 9, 11] },
  dordan: { label: 'Dorian', degree: [0, 2, 3, 5, 7, 9, 10] },
  phrygian: { label: 'Phrygian', degree: [0, 1, 3, 5, 7, 8, 10] },
  lydian: { label: 'Lydian', degree: [0, 2, 4, 6, 7, 9, 11] },
  mixolydian: { label: 'Mixolydian', degree: [0, 2, 4, 5, 7, 9, 10] },
  aeolian: { label: 'Aeolian', degree: [0, 2, 3, 5, 7, 8, 10] },
  locrian: { label: 'Locrian', degree: [0, 1, 3, 5, 6, 8, 10] },
  majorPentatonic: { label: 'Major Pentatonic', degree: [0, 2, 4, 7, 9] },
  minorPentatonic: { label: 'Minor Pentatonic', degree: [0, 3, 5, 7, 10] },
  blues: { label: 'Blues', degree: [0, 3, 5, 6, 7, 10] },
  harmonicMinor: { label: 'Harmonic Minor', degree: [0, 2, 3, 5, 7, 8, 11] },
  melodicMinor: { label: 'Melodic Minor', degree: [0, 2, 3, 5, 7, 9, 11] },
};
