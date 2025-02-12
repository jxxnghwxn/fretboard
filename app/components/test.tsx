import { notes, instruments, tunings, systems } from '@/app/lib/music';
import { selectedNotesArray } from '../lib/constant';

export default function Controller() {
  return (
    <div className="flex justify-center items-center ">
      <div className="layout-grid grid grid-cols-3 gird-rows-4 gap-2 w-100 bg-gray-400 shadow-lg">
        <div className="layout-item flex flex-col gap-2 bg-gray-200 rounded-md">
          <div className="flex">
            <label htmlFor="">instrument</label>
            <div className="hidden">
              <div>guitar</div>
              <div>bass</div>
            </div>
          </div>
          <div className="flex">
            <label htmlFor="">tuning</label>
            <div className="hidden">
              <div>EADGBE</div>
              <div>DADGAD</div>
            </div>
          </div>
        </div>

        <div className="layout-item col-span-2 flex gap-2 bg-gray-200">
          <div className="flex gap-2 justify-center items-center">
            <label htmlFor="accidental"></label>
            <div className="flex">
              <div>♭</div>
              <div>♯</div>
            </div>
          </div>
          <div className="">
            <label htmlFor="Key"></label>
            <div className="flex gap-1 justify-center items-center">
              {selectedNotesArray.map((note, idx) => (
                <div key={idx}>{note}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="layout-item bg-gray-200">
          <div className="">scale or chord</div>
        </div>

        <div className="layout-item bg-gray-200">
          <div>system</div>
          <div className="hidden">
            <div>major</div>
            <div>minor</div>
            <div>maj penta</div>
            <div>min penta</div>
            <div>diminished</div>
          </div>
        </div>

        <div className="layout-item bg-gray-200">
          <div>fingering</div>
          <div className="flex">
            <div>CAGED</div>
            <div>3NPS</div>
            <div>all</div>
          </div>
        </div>

        <div className="layout-item bg-gray-200">
          <div>number of fret</div>
          <div>bar</div>
        </div>

        <div className="layout-item col-span-2 flex flex-col bg-gray-200">
          <div>fretmarker</div>
          <div className="flex">
            <div className="flex">
              <div>note</div>
              <div>degree</div>
              <div>interval</div>
              <div>none</div>
            </div>
            <div className="flex">
              <div>root</div>
              <div>third</div>
              <div>fifth</div>
              <div>seventh</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
