import { notes, instruments, tunings, systems } from '@/app/lib/music';
import { selectedNotesArray } from '../lib/constant';

// CSS
import s from '@/app/styles/FretboardSet.module.css';

export default function FretboardSet() {
  return (
    <>
      <div className={`${s.container} grid`}>
        {/*instrument and tuning*/}
        <div className={`${s.item}`}>
          <div>
            <label htmlFor="instrument"></label>
          </div>
          <div>
            <label htmlFor="tuning"></label>
          </div>
        </div>
        {/*accidental and note*/}
        <div className={`${s.item}`}>
          <div>
            <label htmlFor="accidental"></label>
          </div>
          <div>
            <label htmlFor="note"></label>
          </div>
        </div>
        {/*chord or sclae*/}
        <div className={`${s.item}`}>
          <label htmlFor=""></label>
        </div>
        {/*specific chord or scale*/}
        <div className={`${s.item}`}>
          <label htmlFor="system"></label>
        </div>
        {/*fingering system*/}
        <div className={`${s.item}`}>
          <label htmlFor="fingerSystem">fingering system</label>
          <select name="" id="fingerSystem">
            <option value="CAGED">CAGED</option>
            <option value="3NPS">3NPS</option>
            <option value="All">ALL</option>
          </select>
        </div>
        {/*number of fret*/}
        <div className={`${s.item}`}>
          <label htmlFor="number of fret"></label>
        </div>
        {/*fret marker*/}
        <div className={`${s.item}`}>
          <label htmlFor="fretmarker"></label>
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
