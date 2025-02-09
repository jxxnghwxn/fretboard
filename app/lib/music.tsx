export const noteFlat: string[] = [
  'A',
  'Bb',
  'B',
  'C',
  'Db',
  'D',
  'Eb',
  'E',
  'F',
  'Gb',
  'G',
  'Ab',
];
export const degrees = {
  flat: ['1', '♭2', '2', '♭3', '3', '4', '♭5', '5', '♭6', '6', '♭7', '7'],
  sharp: ['1', '♯1', '2', '♯2', '3', '4', '♯4', '5', '♯5', '6', '♯6', '7'],
};
export const tunings = {
  guitar: {
    standard: ['E', 'A', 'D', 'G', 'B', 'E'],
  },
  bass: {
    standard: ['E', 'A', 'D', 'G'],
  },
};

export const instruments = {
  guitar: { name: 'Guitar', nbStrings: 6 },
  bass: { name: 'Bass', nbStrings: 4 },
};

export const models = {
  ionian: { name: 'Ionian', degree: [1, 3, 5, 6, 8, 10, 12] },
};
