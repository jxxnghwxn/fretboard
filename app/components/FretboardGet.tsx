// import Image from 'next/image';
import { NOTES, INSTRUMENTS, SCALE_TYPES, TUNINGS } from '@/lib/music';

import s from '@/styles/GetFretboard.module.css';

export default function FretboardGet({ fretboardState }) {
  const numberOfStrings = INSTRUMENTS[fretboardState.INSTRUMENT].nbStrings;
  const [fretStart, fretEnd] = fretboardState.range.fret;
  const numberOfFrets = fretEnd - fretStart + 1;

  const selectedKey = fretboardState.key;
  const selectedSystem = SCALE_TYPES[fretboardState.SCALE_TYPES].DEGREES;

  const selectedNotesArray =
    fretboardState.accidental.toLowerCase() === 'flat'
      ? NOTES.flat
      : NOTES.sharp;

  function getNoteName(openNoteName: string, fretIndex: number): string {
    const openNoteIndex = selectedNotesArray.indexOf(openNoteName);
    if (openNoteIndex === -1) return '';
    const noteIndex = (openNoteIndex + fretIndex) % selectedNotesArray.length;
    return selectedNotesArray[noteIndex];
  }

  const selectedNotesInSystem = selectedSystem.map(
    (degree) =>
      selectedNotesArray[
        (selectedNotesArray.indexOf(selectedKey) + degree) %
          selectedNotesArray.length
      ]
  );

  const getTnpsPos = (pos): number[][] => {
    return Array.from({ length: 6 }, (_, i) => {
      return [
        ((((i + 6) * 3) % 7) + pos - 1) % 7,
        ((((i + 6) * 3 + 1) % 7) + pos - 1) % 7,
        ((((i + 6) * 3 + 2) % 7) + pos - 1) % 7,
      ];
    });
  };

  const getCAGEDPos = (pos: number): number[][] => {
    // CAGED 패턴에 맞는 음들
    const patterns = {
      1: [
        [5, 6],
        [7, 1, 2],
        [3, 4, 5],
        [6, 7, 1],
        [2, 3, 4],
        [5, 6],
      ],
      2: [
        [6, 7, 1],
        [2, 3, 4],
        [5, 6],
        [7, 1, 2],
        [3, 4, 5],
        [6, 7, 1],
      ],
      3: [
        [7, 1, 2],
        [3, 4, 5],
        [6, 7, 1],
        [2, 3, 4],
        [5, 6],
        [7, 1, 2],
      ],
      4: [
        [2, 3, 4],
        [5, 6],
        [7, 1, 2],
        [3, 4, 5],
        [6, 7, 1],
        [2, 3, 4],
      ],
      5: [
        [3, 4, 5],
        [6, 7, 1],
        [2, 3, 4],
        [5, 6],
        [7, 1, 2],
        [3, 4, 5],
      ],
    };

    return patterns[pos];
  };

  const stringIndexes = Array.from(
    { length: numberOfStrings },
    (_, stringIdx) => stringIdx
  ).reverse();

  const viewMode = (currentNote, stringIdx) => {
    switch (fretboardState.fingerSystem) {
      case 'ALL':
        return selectedNotesInSystem.includes(currentNote);
      case '3NPS':
        return getTnpsPos(fretboardState.fingerPosition)
          [stringIdx].map((tnpsIdx) => selectedNotesInSystem[tnpsIdx])
          .includes(currentNote);
      case 'CAGED':
        return getCAGEDPos(fretboardState.fingerPosition)
          [stringIdx].map((tnpsIdx) => selectedNotesInSystem[tnpsIdx - 1])
          .includes(currentNote);
      default:
        return false;
    }
  };

  return (
    <div className={s.wrapper}>
      <div>
        <h3>Selected Notes in System</h3>
        <p>{JSON.stringify(selectedNotesInSystem)}</p>
      </div>
      <div className={s.fretboard}>
        {stringIndexes.map((stringIdx) => {
          const openNoteName =
            TUNINGS[fretboardState.instrument][fretboardState.tuning][
              stringIdx
            ];
          if (!openNoteName) return null;
          const isOpenInSystem = selectedNotesInSystem.includes(openNoteName);

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
                const currentViewMode = viewMode(currentNote, stringIdx);

                return (
                  <div
                    className={`${s.noteFret} ${
                      currentViewMode ? s.inView : ''
                    }`}
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
