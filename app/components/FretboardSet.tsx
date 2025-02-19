// import { useState } from 'react';

import {
  notes,
  instruments,
  tunings,
  scaleTypes,
  chordTypes,
} from '@/lib/music';

// CSS
import s from '@/styles/FretboardSet.module.css';

// other Components
import RangeSlider from './RangeSlider';
// import PopUpSelectSystem from './PopUpSelectSystem';

export default function FretboardSet({ fretState, updateFretState }) {
  // const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  // const openPopUp = () => {
  //   setPopUpIsOpen(true);
  // };
  // const closePopUp = () => {
  //   setPopUpIsOpen(false);
  // };

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
            <div className={`hidden`}>instrument</div>
            <select
              id='instrument'
              value={fretState.instrument}
              onChange={(e) => updateFretState('instrument', e.target.value)}
            >
              {Object.entries(instruments).map(([key, { name }]) => (
                <option value={key} key={key}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <div className={`hidden`}>tuning</div>
            <select
              id='tuning'
              value={fretState.tuning}
              onChange={(e) => {
                updateFretState('tuning', e.target.value);
              }}
            >
              {Object.entries(tunings[fretState.instrument]).map(
                ([tuningKey, tuningValue]) => (
                  <option value={tuningKey} key={tuningKey}>
                    {tuningValue}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        {/*accidental and note*/}
        <div className={`${s.item} col-span-2`}>
          <div>
            <div className={`hidden`}>accidental</div>
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
            <div className={`hidden`}>note</div>
            <div className={`flex`}>
              {notesArray.map((note, idx) => (
                <div key={idx}>{note}</div>
              ))}
            </div>
          </div>
        </div>

        {/*system type*/}
        <div className={`${s.item}`}>
          <div className={`hidden`}></div>
          <div>
            <div onClick={() => updateFretState('systemType', 'chord')}>
              chord
            </div>
            <div onClick={() => updateFretState('systemType', 'scale')}>
              scale
            </div>
          </div>
        </div>

        {/*scale type, chord type*/}
        <div className={`${s.item}`}>
          <div className={`hidden`}></div>
          <select
            id='system'
            value={
              fretState.systemType === 'scale'
                ? fretState.scaleType
                : fretState.chordType
            }
            onChange={(e) =>
              updateFretState(
                fretState.systemType === 'scale' ? 'scaleType' : 'chordType',
                e.target.value
              )
            }
          >
            {Object.entries(
              fretState.systemType === 'scale' ? scaleTypes : chordTypes
            ).map(([key, { name }]) => (
              <option value={key} key={key}>
                {name}
              </option>
            ))}
          </select>
        </div>

        {/*fingering system*/}
        <div className={`${s.item}`}>
          <div htmlFor='fingerSystem'>fingering system</div>
          <div>
            <div onClick={() => updateFretState('fingerSystem', 'CAGED')}>
              CAGED
            </div>
            <div onClick={() => updateFretState('fingerSystem', '3NPS')}>
              3NPS
            </div>
            <div onClick={() => updateFretState('fingerSystem', 'ALL')}>
              ALL
            </div>
          </div>
        </div>

        {/*number of fret*/}
        <div className={`${s.item}`}>
          <div>number of fret</div>
          <RangeSlider settings={fretState} updateSetting={updateFretState} />
        </div>

        {/*fret marker*/}
        <div className={`${s.item} col-span-2`}>
          <div>fretmarkder</div>
        </div>
      </div>

      {/* <div className="temp">
        <div htmlFor=""></div>
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
        </select>
      </div> */}
    </>
  );
}
