// import Image from 'next/image';
import { noteFlat, tunings, instruments } from '@/app/lib/music';
const selectedInstrument = 'guitar';
const numberOfStrings: number = instruments[selectedInstrument].nbStrings;
const numberOfFrets = 15 + 1;
// const stringSpacing = 10;
// const fretSpacing = 10;
// const fretColor = 'black';
// const stringColor = 'black';
// const neckColor = 'brown';

function getNoteName(openNote: string, fretIndex: number) {
  const openNoteIndex = noteFlat.indexOf(openNote);
  const noteIndex = (openNoteIndex + fretIndex) % noteFlat.length;
  return noteFlat[noteIndex];
}

export default function Home() {
  const stringIndex = Array.from(
    { length: numberOfStrings },
    (_, stringIndex) => stringIndex
  ).reverse();

  return (
    <div className="wrapper">
      <div className="fretboard">
        {stringIndex.map((stringIndex) => (
          <div className="string" key={stringIndex}>
            {Array.from({ length: numberOfFrets }).map((_, fretIndex) => (
              <div className="note-fret" key={fretIndex}>
                <div className="note-name">
                  {getNoteName(tunings.guitar.standard[stringIndex], fretIndex)}
                  {/* {getNoteName(tunings.bass.standard[stringIndex], fretIndex)} */}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
