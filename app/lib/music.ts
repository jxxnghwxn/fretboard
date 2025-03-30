export const NOTES = {
  FLAT: ['A', 'B♭', 'B', 'C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭'],
  SHARP: ['A', 'A♯', 'B', 'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯'],
};

export const DEGREES = {
  FLAT: ['1', '♭2', '2', '♭3', '3', '4', '♭5', '5', '♭6', '6', '♭7', '7'],
  SHARP: ['1', '♯1', '2', '♯2', '3', '4', '♯4', '5', '♯5', '6', '♯6', '7'],
};

export const INSTRUMENTS = {
  GUITAR_6S: { NAME: 'Guitar 6s', nbStrings: 6 },
  GUITAR_7S: { NAME: 'Guitar 7s', nbStrings: 7 },
  BASS_4S: { NAME: 'Bass 4s', nbStrings: 4 },
  BASS_5S: { NAME: 'Bass 5s', nbStrings: 5 },
};

export const TUNINGS = {
  GUITAR_6S: {
    STANDARD: ['E', 'A', 'D', 'G', 'B', 'E'],
    DROP_D: ['D', 'A', 'D', 'G', 'A', 'D'],
  },
  GUITAR_7S: {
    STANDARD: ['B', 'E', 'A', 'D', 'G', 'B', 'E'],
  },
  BASS_4S: {
    STANDARD: ['E', 'A', 'D', 'G'],
  },
  BASS_5S: {
    STANDARD: ['B', 'E', 'A', 'D', 'G'],
    STANDARD_HIGH: ['E', 'A', 'D', 'G', 'C'],
  },
};

export const SCALE_TYPES = {
  CHROMATIC: {
    NAME: 'Chromatic',
    DEGREE: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  PENTATONIC_MAJOR: { NAME: 'Pentatonic Major', DEGREE: [1, 3, 5, 8, 10] },
  PENTATONIC_MINOR: { NAME: 'Pentatonic Minor', DEGREE: [1, 4, 6, 8, 11] },

  // Major ( Minor )
  IONIAN: { NAME: 'Ionian', DEGREE: [1, 3, 5, 6, 8, 10, 12] },
  DORIAN: { NAME: 'Dorian', DEGREE: [1, 3, 4, 6, 8, 10, 11] },
  PHRYGIAN: { NAME: 'Phrygian', DEGREE: [1, 2, 4, 6, 8, 9, 11] },
  LYDIAN: { NAME: 'Lydian', DEGREE: [1, 3, 5, 7, 8, 10, 12] },
  MIXOLYDIAN: { NAME: 'Mixolydian', DEGREE: [1, 3, 5, 6, 8, 10, 11] },
  AEOLIAN: { NAME: 'Aeolian', DEGREE: [1, 3, 4, 6, 8, 9, 11] },
  LOCRIAN: { NAME: 'Locrian', DEGREE: [1, 2, 4, 6, 7, 9, 11] },
  // Harmonic Minor
  HARMONIC_MINOR: { NAME: 'Harmonic Minor', DEGREE: [1, 3, 4, 6, 8, 9, 12] },
  HARMONIC_MINOR_2: { NAME: 'Lociran ♯6', DEGREE: [1, 3, 4, 6, 8, 9, 12] },
  HARMONIC_MINOR_3: { NAME: 'Ionian ♯5', DEGREE: [1, 2, 4, 6, 7, 10, 11] },
  HARMONIC_MINOR_4: { NAME: 'Dorian ♯4', DEGREE: [1, 3, 4, 7, 8, 10, 11] },
  HARMONIC_MINOR_5: { NAME: 'Phrygian #3', DEGREE: [1, 2, 5, 6, 8, 9, 11] },
  HARMONIC_MINOR_6: { NAME: 'Lydian ♯2', DEGREE: [1, 4, 5, 7, 8, 10, 12] },
  HARMONIC_MINOR_7: { NAME: 'Locrian ♭4♭7', DEGREE: [1, 2, 4, 5, 7, 9, 10] }, // **
  // Melodic Minor
  MELODIC_MINOR: { NAME: 'Melodic Minor', DEGREE: [1, 3, 4, 6, 8, 10, 12] },
  MELODIC_MINOR_2: { NAME: 'Dorian ♭2', DEGREE: [1, 2, 4, 6, 8, 10, 11] },
  MELODIC_MINOR_3: { NAME: 'Lydian #5', DEGREE: [1, 3, 5, 7, 9, 10, 12] }, // **
  MELODIC_MINOR_4: { NAME: 'Lydian ♭7', DEGREE: [1, 3, 5, 7, 8, 10, 11] },
  MELODIC_MINOR_5: { NAME: 'Mixolydian ♭6', DEGREE: [1, 3, 5, 6, 8, 9, 11] },
  MELODIC_MINOR_6: { NAME: 'Aeolian ♭5', DEGREE: [1, 3, 4, 6, 7, 9, 11] },
  MELODIC_MINOR_7: { NAME: 'Locrian ♭4', DEGREE: [1, 2, 4, 5, 7, 9, 11] },
  // other
  BLUES_MAJOR: { NAME: 'Major Blues', DEGREE: [1, 3, 4, 5, 8, 10] },
  BLUES_MINOR: { NAME: 'Minor Blues', DEGREE: [1, 4, 6, 7, 8, 11] },
};

export const CHORD_TYPES = {
  MAJ: { NAME: 'Major', DEGREE: [1, 3, 5] },
  MIN: { NAME: 'Minor', DEGREE: [1, 3, 5] },
  MAJ7: { NAME: 'Major 7', DEGREE: [1, 3, 5, 7] },
  MIN7: { NAME: 'Minor 7', DEGREE: [1, 3, 5, 7] },
  DOM7: { NAME: 'Dominant 7', DEGREE: [1, 5, 8, 11] },
};
