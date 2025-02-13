// import Image from 'next/image';
import { tunings, instruments, systems } from '@/app/lib/music';
import { selectedNotesArray } from '@/app/lib/constant';

import s from '@/app/styles/FretboardGet.module.css';

const selectedInstrument = 'guitar';
const numberOfStrings: number = instruments[selectedInstrument].nbStrings;
const numberOfFrets = 25;

const selectedKey = 'C';
const selectedSystem = systems.ionian.degree; // from user input

const selectedTuning = tunings[selectedInstrument].standard; // from user input

// function getOpenNotesIndex(): number[] {
//   const tuning = tunings[selectedInstrument].standard; // from user input
//   return tuning.map((note: string) => selectedNotesArray.indexOf(note));
// }

function getNoteName(openNoteName: string, fretIndex: number): string {
  const openNoteIndex = selectedNotesArray.indexOf(openNoteName);
  const noteIndex = (openNoteIndex + fretIndex) % selectedNotesArray.length;
  return selectedNotesArray[noteIndex];
}

function getNotesinSystemName(
  key: string,
  system: number[],
  notesArray: string[]
): string[] {
  const keyIndex = notesArray.indexOf(key); //key 3
  return system.map(
    (degree) => notesArray[(keyIndex + degree) % notesArray.length]
  );
}
const selectedNotes = getNotesinSystemName(
  selectedKey,
  selectedSystem,
  selectedNotesArray
);

export default function FretboardGet() {
  const stringIndexes = Array.from(
    { length: numberOfStrings },
    (_, stringIndex) => stringIndex
  ).reverse();
  return (
    <div className={s.wrapper}>
      <div className={s.fretboard}>
        {stringIndexes.map((stringIdx) => {
          const openNoteName = selectedTuning[stringIdx];
          return (
            <div className={s.string} key={stringIdx}>
              {Array.from({ length: numberOfFrets }).map((_, fretIdx) => {
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
