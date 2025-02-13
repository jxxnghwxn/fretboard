// import Image from 'next/image';
import { notes, tunings, instruments, systems } from '@/lib/music';

import FretboardSet from './FretboardSet';

import s from '@/styles/FretboardGet.module.css';

// 나중에 타입 추가할때
// import { Settings } from '@/types'; // 경로에 맞게 수정

// interface FretboardGetProps {
//   settings: Settings;
// }

const selectedInstrument = 'guitar';
const selectedTuning = tunings[selectedInstrument].standard; // from user input
const numberOfStrings: number = instruments[selectedInstrument].nbStrings;
const numberOfFrets = 25;

const selectedKey = 'C';
const selectedSystem = systems.ionian.degree; // from user input

// function getOpenNotesIndex(): number[] {
//   const tuning = tunings[selectedInstrument].standard; // from user input
//   return tuning.map((note: string) => selectedNotesArray.indexOf(note));
// }

export default function FretboardGet({ settings }) {
  const selectedAccidental = settings.accidental;
  const selectedNotesArray =
    selectedAccidental === 'flat' ? notes.flat : notes.sharp;

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
