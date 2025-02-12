import { notes, instruments, tunings, systems } from '@/app/lib/music';
import { selectedNotesArray } from '../lib/constant';

export default function FretboardSet() {
  return (
    <>
      <div className="container grid">
        <div className="item"></div>
        <div className="item "></div>
        <div className="item "></div>
        <div className="item "></div>
        <div className="item "></div>
        <div className="item "></div>
        <div className="item "></div>
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
