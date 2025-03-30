import { NOTES, INSTRUMENTS, SCALE_TYPES, TUNINGS } from '@/lib/music';

import s from '@/styles/GetFretboard.module.css';

function GetFretboard({ fretboardState }) {
  const [stringStart, stringEnd] = fretboardState.range.string;
  const [fretStart, fretEnd] = fretboardState.range.fret;
  const numberOfStrings = stringEnd - stringStart + 1;
  const numberOfFrets = fretEnd - fretStart + 1;

  const selectedInstrument = fretboardState.instrument;
  const selectedTuning = fretboardState.tuning;
  const selectedKey = fretboardState.key;
  const selectedAccidental = fretboardState.accidental;
  const selectedMusicSystem = fretboardState.musicSystem;
  const selectedScaleType = fretboardState.scaleType;
  const selectedChordType = fretboardState.chordType;

  const fingerSystem = fretboardState.fingerSystem;
  const fingerPosition = fretboardState.fingerPosition;
  const displayMode = fretboardState.display.mode;

  const selectedSystem = SCALE_TYPES[selectedScaleType].DEGREE;
  const selectedNotesArray = NOTES[selectedAccidental];

  function calculateNote(stringIdx: number, fretIdx: number): string {
    const openNoteArray = TUNINGS[selectedInstrument][selectedTuning];
    const openNoteName = openNoteArray[openNoteArray.length - 1 - stringIdx];
    const openNoteIdx = selectedNotesArray.indexOf(openNoteName);
    if (openNoteIdx === -1) {
      return '';
    }
    const noteName = (openNoteIdx + fretIdx) % selectedNotesArray.length;
    return selectedNotesArray[noteName];
  }

  const fretboard = createFretboard();

  function createFretboard() {
    const board = Array.from({ length: numberOfStrings }, (_, stringIdx) =>
      Array.from({ length: numberOfFrets }, (_, fretIdx) => {
        return {
          string: stringIdx + 1,
          fret: fretIdx + 1,
          noteName: calculateNote(stringIdx, fretIdx),
        };
      })
    );
    return board;
  }

  return (
    <div className={s.fretboard}>
      {fretboard.map((string, stringIdx) => (
        <div key={stringIdx} className={s.string}>
          {string.map((noteInfo, fretIdx) => (
            <div key={fretIdx} className={s.fret}>
              {noteInfo.noteName}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default GetFretboard;
