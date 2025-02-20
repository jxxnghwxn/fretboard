export default function ViewMode({ fretState, updateFretState }) {
  return;
  {
    Array.from({
      length: numberOfFrets,
    }).map((_, Idx) => {
      const fretIdx = fretStart + Idx;
      const currentNote = getNoteName(openNoteName, fretIdx);
      // const isInSystem = selectedNotesInSystem.includes(currentNote);
      const isInPos = getTnpsPos(fretState.fingerPosition)
        [stringIdx].map((tnpsIdx) => selectedNotesInSystem[tnpsIdx])
        .includes(currentNote);

      return (
        <div
          className={`${s.noteFret} ${isInPos ? s.inView : ''}`}
          key={fretIdx}
        >
          <div className={s.noteName}>{currentNote}</div>
        </div>
      );
    });
  }
}
