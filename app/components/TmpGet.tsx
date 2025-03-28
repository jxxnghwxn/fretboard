import { NOTES, INSTUMENTS, scaleTypes, TUNINGS } from '@/lib/music';

import s from '@/styles/FretboardGet.module.css';

function TmpGet({ fretboardSettings }) {
  const numberOfStrings = INSTUMENTS[fretboardSettings.instrument].nbStrings;
  const [fretStart, fretEnd] = fretboardSettings.fretRange;
  const numberOfFrets = fretEnd - fretStart + 1;

  // state 뽑기
  const selectedInstrument = fretboardSettings.instrument;
  const selectedTuning = fretboardSettings.tuning;
  const selectedAccidental = fretboardSettings.accidental;
  const selectedKey = fretboardSettings.key;

  const selectedSystem = scaleTypes[fretboardSettings.scaleType].degree;
  const selectedNotesArray = NOTES[fretboardSettings.accidental];

  type NoteInfo = {
    string: number;
    fret: number;
    note?: string;
  };

  function calculateNote(stringIdx: number, fretIdx: number): string {
    const openNote =
      TUNINGS[selectedInstrument][selectedTuning][
        tuning.length - 1 - stringIdx
      ];
    const openNoteIdx = selectedNotesArray.indexOf(openNote);
    const noteName = (openNoteIdx + fretIdx) % selectedNotesArray.length;
    return selectedNotesArray[noteName];
  }

  const fretboard = createFretboard;

  function createFretboard() {
    const board = Array.from({ length: numberOfStrings }, (_, stringIdx) =>
      Array.from({ length: numberOfFrets }, (_, fretIdx) => {
        return {
          string: stringIdx,
          fret: fretIdx,
          note: calculateNote(stringIdx, fretIdx),
        };
      })
    ).reverse();
    return board;
  }

  return (
    <div>
      <h1>Fretboard</h1>
    </div>
  );
}
export default TmpGet;
