import { notes, instruments, tunings, systems } from '@/lib/music';
// import { selectedNotesArray } from '@/lib/constant';

// CSS
import s from '@/styles/FretboardSet.module.css';
import RangeSlider from './RangeSlider';

export default function FretboardSet({ fretState, updateFretState }) {
  const selectedNotesArray =
    fretState.accidental === 'flat' ? notes.flat : notes.sharp;
  const notesArray = [
    ...selectedNotesArray.slice(3),
    ...selectedNotesArray.slice(0, 3),
  ];

  return (
    <>
      <div className={`${s.container} grid grid-cols-3 gird-rows-4 gap-2`}>
        {/*instrument and tuning*/}
        <div className={`${s.item}`}>
          <div>
            <label htmlFor='instrument'></label>
          </div>
          <div>
            <label htmlFor='tuning'></label>
          </div>
        </div>

        {/*accidental and note*/}
        <div className={`${s.item} col-span-2`}>
          <div>
            <label className={`hidden`}>accidental</label>
            <div>
              <div
                onClick={() => updateFretState('accidental', 'flat')}
                className={`cursor-pointer`}
              >
                ♭
              </div>
              <div
                onClick={() => updateFretState('accidental', 'sharp')}
                className={`cursor-pointer`}
              >
                ♯
              </div>
            </div>
          </div>
          <div>
            <label htmlFor='note'></label>
            <div className={`flex`}>
              {notesArray.map((note, idx) => (
                <div key={idx}>{note}</div>
              ))}
            </div>
          </div>
        </div>

        {/*chord or sclae*/}
        <div className={`${s.item}`}>
          <label htmlFor=''></label>
        </div>

        {/*specific chord or scale*/}
        <div className={`${s.item}`}>
          <label htmlFor='system'></label>
        </div>

        {/*fingering system*/}
        <div className={`${s.item}`}>
          <label htmlFor='fingerSystem'>fingering system</label>
          {/* <div>
            <div onClick={updateFretState('fingerSystem', 'CAGED')}>CAGED</div>
            <div onClick={updateFretState('fingerSystem', '3NPS')}>3NPS</div>
            <div onClick={updateFretState('fingerSystem', 'ALL')}>ALL</div>
          </div> */}
        </div>

        {/*number of fret*/}
        <div className={`${s.item}`}>
          <label htmlFor='number of fret'>number of fret</label>
          <RangeSlider settings={fretState} updateSetting={updateFretState} />
        </div>

        {/*fret marker*/}
        <div className={`${s.item} col-span-2`}>
          <label htmlFor='fretmarker'>fretmarkder</label>
        </div>
      </div>

      {/* <div className="temp">
        <label htmlFor=""></label>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
        </select>
      </div> */}
    </>
  );
}
