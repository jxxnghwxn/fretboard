// import Image from 'next/image';
import { notes, tunings, instruments, systems } from '@/app/lib/music';
const selectedInstrument = 'guitar';
const numberOfStrings: number = instruments[selectedInstrument].nbStrings;
const numberOfFrets = 12;

const selectedKey = 'C';
const selectedSystem = systems.ionian.degree; // from user input

const selectedAccidental = '♭'; // or '♯'
const selectedNotesArray =
  selectedAccidental === '♭' ? notes.flat : notes.sharp;

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

function getScaleNotesName(
  key: string,
  system: number[],
  notesArray: string[]
): string[] {
  const keyIndex = notesArray.indexOf(key); //key 3
  return system.map(
    (degree) => notesArray[(keyIndex + degree) % notesArray.length]
  );
}
const selectedNotes = getScaleNotesName(
  selectedKey,
  selectedSystem,
  selectedNotesArray
);

export default function Home() {
  const stringIndexes = Array.from(
    { length: numberOfStrings },
    (_, stringIndex) => stringIndex
  ).reverse();
  return (
    <div className="wrapper">
      <div className="fretboard">
        {stringIndexes.map((stringIndex) => {
          const openNoteName = selectedTuning[stringIndex];
          return (
            <div className="string" key={stringIndex}>
              {Array.from({ length: numberOfFrets }).map((_, fretIndex) => {
                const currentNote = getNoteName(openNoteName, fretIndex);
                const isInScale = selectedNotes.includes(currentNote);
                return (
                  <div className="note-fret" key={fretIndex}>
                    <div className="note-name">
                      {isInScale ? currentNote : ''}
                    </div>
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
