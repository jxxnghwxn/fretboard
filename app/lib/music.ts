export const notes = {
  flat: ['A', 'B♭', 'B', 'C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭'],
  sharp: ['A', 'A♯', 'B', 'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯'],
};

export const degrees = {
  flat: ['1', '♭2', '2', '♭3', '3', '4', '♭5', '5', '♭6', '6', '♭7', '7'],
  sharp: ['1', '♯1', '2', '♯2', '3', '4', '♯4', '5', '♯5', '6', '♯6', '7'],
};

export const instruments = {
  guitar: { name: 'Guitar', nbStrings: 6 },
  guitar_7: { name: '7-string guitar', nbStrings: 7 },
  bass: { name: 'Bass', nbStrings: 4 },
  bass_5: { name: '5-string bass', nbStrings: 5 },
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

export const scaleTypes = {
  chromatic: {
    name: 'Chromatic',
    degree: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
  majorPentatonic: { name: 'Major Pentatonic', degree: [0, 2, 4, 7, 9] },
  minorPentatonic: { name: 'Minor Pentatonic', degree: [0, 3, 5, 7, 10] },

  // Major ( Minor )
  ionian: { name: 'Ionian', degree: [0, 2, 4, 5, 7, 9, 11] },
  dordan: { name: 'Dorian', degree: [0, 2, 3, 5, 7, 9, 10] },
  phrygian: { name: 'Phrygian', degree: [0, 1, 3, 5, 7, 8, 10] },
  lydian: { name: 'Lydian', degree: [0, 2, 4, 6, 7, 9, 11] },
  mixolydian: { name: 'Mixolydian', degree: [0, 2, 4, 5, 7, 9, 10] },
  aeolian: { name: 'Aeolian', degree: [0, 2, 3, 5, 7, 8, 10] },
  locrian: { name: 'Locrian', degree: [0, 1, 3, 5, 6, 8, 10] },
  // Harmonic Minor
  harmonicMinor: { name: 'Harmonic Minor', degree: [0, 2, 3, 5, 7, 8, 11] },
  harmonicMinor2: { name: 'Lociran ♯6', degree: [0, 2, 3, 5, 7, 8, 11] },
  harmonicMinor3: { name: 'Ionian ♯5', degree: [0, 1, 3, 5, 6, 9, 10] },
  harmonicMinor4: { name: 'Dorian ♯4', degree: [0, 2, 3, 6, 7, 9, 10] },
  harmonicMinor5: { name: 'Phrygian #3', degree: [0, 1, 4, 5, 7, 8, 10] },
  harmonicMinor6: { name: 'Lydian ♯2', degree: [0, 3, 4, 6, 7, 9, 11] },
  harmonicMinor7: { name: 'Locrian ♭4♭7', degree: [0, 1, 3, 4, 6, 8, 9] }, // **
  // Melodic Minor
  melodicMinor: { name: 'Melodic Minor', degree: [0, 2, 3, 5, 7, 9, 11] },
  melodicMinor2: { name: 'Dorian ♭2', degree: [0, 1, 3, 5, 7, 9, 10] },
  melodicMinor3: { name: 'Lydian #5', degree: [0, 2, 4, 6, 8, 9, 11] }, // **
  melodicMinor4: { name: 'Lydian ♭7', degree: [0, 2, 4, 6, 7, 9, 10] },
  melodicMinor5: { name: 'Mixolydian ♭6', degree: [0, 2, 4, 5, 7, 8, 10] },
  melodicMinor6: { name: 'Aeolian ♭5', degree: [0, 2, 3, 5, 6, 8, 10] },
  melodicMinor7: { name: 'Locrian ♭4', degree: [0, 1, 3, 4, 6, 8, 10] },
  // other
  blues: { name: 'Blues', degree: [0, 3, 5, 6, 7, 10] },
};

export const chordTypes = {
  maj: { name: 'major', degree: [0, 4, 7] },
  min: { name: 'minor', degree: [0, 3, 7] },
  maj7: { name: 'major7', degree: [0, 4, 7, 11] },
  min7: { name: 'minor7', degree: [0, 3, , 7, 10] },
  dom7: { name: '7', degree: [0, 4, 7, 10] },
};
