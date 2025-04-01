import { NOTES, DEGREES, TUNINGS, SCALE_TYPES, CHORD_TYPES } from '@/lib/music';

import type { NoteInfo } from '@/lib/FretboardState';
import s from '@/styles/GetFretboard.module.css';

function GetFretboard({ fretboardState }) {
  const {
    instrument: selectedInstrument,
    tuning: selectedTuning,
    range: {
      string: [stringStart, stringEnd],
      fret: [fretStart, fretEnd],
    },

    key: selectedKey,
    accidental: selectedAccidental,
    musicSystem: selectedMusicSystem,
    scaleType: selectedScaleType,
    chordType: selectedChordType,

    fingerSystem: selectedFingerSystem,
    fingerPosition: selectedFingerPosition,

    display: { mode: selectedDisplayMode },
  } = fretboardState;

  const nbStrings = stringEnd - stringStart + 1;
  const nbFrets = fretEnd - fretStart + 1;
  const selectedNotation = NOTES[selectedAccidental];
  const selectedIntervals = (() => {
    switch (selectedMusicSystem) {
      case 'SCALE':
        return SCALE_TYPES[selectedScaleType].DEGREE;
      case 'CHORD':
        return CHORD_TYPES[selectedChordType].DEGREE;
      default:
        return [];
    }
  })();

  function createNoteInfo(stringIdx: number, fretIdx: number): NoteInfo {
    // Calculate note name
    const openNoteArray = TUNINGS[selectedInstrument][selectedTuning].TUNING;
    const openNoteName = openNoteArray[openNoteArray.length - 1 - stringIdx];
    const openNoteIdx = selectedNotation.indexOf(openNoteName);
    if (openNoteIdx === -1) return null;
    const noteNameIdx = (openNoteIdx + fretIdx) % 12;
    const noteName = selectedNotation[noteNameIdx];

    // Calculate note degree
    const rootNoteIdx = selectedNotation.indexOf(selectedKey);
    if (rootNoteIdx === -1) return null;
    const noteDegreeIdx = (noteNameIdx - rootNoteIdx + 12) % 12;
    const noteDegree = DEGREES[selectedAccidental][noteDegreeIdx];

    const isInIntervals = selectedIntervals.includes(noteDegreeIdx);

    return {
      string: stringIdx + 1,
      fret: fretIdx + 1,
      noteName,
      noteDegree,
      isInIntervals,
    };
  }

  function createFretboard() {
    const board = Array.from({ length: nbStrings }, (_, stringIdx) =>
      Array.from({ length: nbFrets }, (_, fretIdx) =>
        createNoteInfo(stringIdx, fretIdx)
      )
    );
    return board;
  }
  const fretboard = createFretboard();

  return (
    <div className={s.fretboard}>
      {fretboard.map((string, stringIdx) => (
        <div key={stringIdx} className={s.string}>
          {string.map((noteInfo, fretIdx) => (
            <div key={fretIdx} className={s.fret}>
              <div
                className={`${s.noteBase} ${
                  noteInfo.isInIntervals ? s.inIntervals : ''
                }`}
              >
                {noteInfo.noteDegree}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default GetFretboard;
