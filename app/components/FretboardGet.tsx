// import Image from 'next/image';
import { notes, instruments, scaleTypes, tunings } from '@/lib/music';

import s from '@/styles/FretboardGet.module.css';

// interface FretboardGetProps {
//   settings: Settings;
// }

// function getOpenNotesIndex(): number[] {
//   const tuning = tunings[selectedInstrument].standard; // from user input
//   return tuning.map((note: string) => selectedNotesArray.indexOf(note));
// }

export default function FretboardGet({ fretState }) {
  const numberOfStrings: number = instruments[fretState.instrument].nbStrings;
  const [fretStart, fretEnd] = fretState.fretRange;
  const numberOfFrets = fretEnd - fretStart + 1;

  const selectedKey = fretState.key;
  const selectedSystem = scaleTypes[fretState.scaleType].degree; // from user input

  const selectedNotesArray =
    fretState.accidental === 'flat' ? notes.flat : notes.sharp;

  function getNoteName(openNoteName: string, fretIndex: number): string {
    const openNoteIndex = selectedNotesArray.indexOf(openNoteName);
    const noteIndex = (openNoteIndex + fretIndex) % selectedNotesArray.length;
    return selectedNotesArray[noteIndex];
  }

  const selectedNotes = selectedSystem.map(
    (degree) =>
      selectedNotesArray[
        (selectedNotesArray.indexOf(selectedKey) + degree) %
          selectedNotesArray.length
      ]
  );

  const stringIndexes = Array.from(
    { length: numberOfStrings },
    (_, stringIdx) => stringIdx
  ).reverse();

  return (
    <div className={s.wrapper}>
      <div className={s.fretboard}>
        {stringIndexes.map((stringIdx) => {
          const openNoteName =
            tunings[fretState.instrument][fretState.tuning][stringIdx];
          const isOpenInSystem = selectedNotes.includes(openNoteName);
          return (
            <div className={s.string} key={stringIdx}>
              <div
                className={`${s.noteFret} ${isOpenInSystem ? s.inSystem : ''}`}
              >
                <div className={s.noteName}>{openNoteName}</div>
              </div>

              {Array.from({
                length: numberOfFrets,
              }).map((_, Idx) => {
                const fretIdx = fretStart + Idx;
                const currentNote = getNoteName(openNoteName, fretIdx);
                const isInSystem = selectedNotes.includes(currentNote);
                return (
                  <div
                    className={`${s.noteFret} ${isInSystem ? s.inSystem : ''}`}
                    key={fretIdx}
                  >
                    <div className={s.noteName}>{currentNote}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
