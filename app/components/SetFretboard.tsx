// import { useState } from 'react';

import {
  NOTES,
  INSTUMENTS,
  TUNINGS,
  scaleTypes,
  chordTypes,
} from '@/lib/music';

// CSS
import s from '@/styles/FretboardSet.module.css';

// other Components
import RangeSlider from './RangeSlider';

export default function SetFretboard({
  fretboardSettings,
  updateFretboardSetting,
}) {
  const selectedNotesArray =
    fretboardSettings.accidental === 'flat' ? NOTES.flat : NOTES.sharp;
  const notesArray = [
    ...selectedNotesArray.slice(3),
    ...selectedNotesArray.slice(0, 3),
  ];

  return (
    <>
      <div
        className={`${s.container} grid grid-cols-3 gird-rows-3 gap-x-1 gap-y-1`}
      >
        {/*instrument and tuning*/}
        <div className={`${s.item}`}>
          <div>
            <div className={`hidden`}>instrument</div>
            <select
              id='instrument'
              value={fretboardSettings.instrument}
              onChange={(e) =>
                updateFretboardSetting('instrument', e.target.value)
              }
            >
              {Object.entries(INSTUMENTS).map(([key, { name }]) => (
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
              value={fretboardSettings.tuning}
              onChange={(e) => {
                updateFretboardSetting('tuning', e.target.value);
              }}
            >
              {Object.entries(TUNINGS[fretboardSettings.instrument]).map(
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
          <div className={`flex gap-1`}>
            <div>
              <div className={`hidden`}>accidental</div>
              <div className={`flex gap-0.5 justify-center items-center`}>
                <div
                  onClick={() => updateFretboardSetting('accidental', 'flat')}
                  className={`${
                    fretboardSettings.accidental === 'flat' ? s.selected : ''
                  } cursor-pointer border h-4 w-4 `}
                >
                  ♭
                </div>
                <div
                  onClick={() => updateFretboardSetting('accidental', 'sharp')}
                  className={`cursor-pointer border h-4 w-4  ${
                    fretboardSettings.accidental === 'sharp' ? s.selected : ''
                  }`}
                >
                  ♯
                </div>
              </div>
            </div>
            <div>
              <div className={`hidden`}>note</div>
              <div className={`flex gap-0.5 justify-center items-center`}>
                {notesArray.map((note, idx) => (
                  <div
                    key={idx}
                    className={`cursor-pointer border h-4 w-4 text-center ${
                      fretboardSettings.key === note ? s.selected : ''
                    }`}
                    onClick={() => updateFretboardSetting('key', `${note}`)}
                  >
                    {note}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*system type*/}
        <div className={`${s.item}`}>
          <div className={`hidden`}></div>
          <div className={`flex gap-1 justify-center items-center`}>
            <div
              className={`cursor-pointer`}
              onClick={() => updateFretboardSetting('systemType', 'chord')}
            >
              <div>chord</div>
            </div>
            <div
              className={`cursor-pointer`}
              onClick={() => updateFretboardSetting('systemType', 'scale')}
            >
              <div>scale</div>
            </div>
          </div>
        </div>
        {/*scale type, chord type*/}
        <div className={`${s.item}`}>
          <div className={`hidden`}></div>
          <select
            id='system'
            value={
              fretboardSettings.systemType === 'scale'
                ? fretboardSettings.scaleType
                : fretboardSettings.chordType
            }
            onChange={(e) =>
              updateFretboardSetting(
                fretboardSettings.systemType === 'scale'
                  ? 'scaleType'
                  : 'chordType',
                e.target.value
              )
            }
          >
            {Object.entries(
              fretboardSettings.systemType === 'scale' ? scaleTypes : chordTypes
            ).map(([key, { name }]) => (
              <option value={key} key={key}>
                {name}
              </option>
            ))}
          </select>
        </div>
        {/*fingering system*/}
        <div className={`${s.item}`}>
          <div>fingering system</div>
          <div className={`flex gap-1 justify-center items-center`}>
            <div
              className={`cursor-pointer ${
                fretboardSettings.fingerSystem === '3NPS' ? s.selected : ''
              }`}
              onClick={() => updateFretboardSetting('fingerSystem', '3NPS')}
            >
              3NPS
            </div>
            <div
              className={`cursor-pointer ${
                fretboardSettings.fingerSystem === 'CAGED' ? s.selected : ''
              }`}
              onClick={() => updateFretboardSetting('fingerSystem', 'CAGED')}
            >
              CAGED
            </div>

            <div
              className={`cursor-pointer ${
                fretboardSettings.fingerSystem === 'ALL' ? s.selected : ''
              }`}
              onClick={() => updateFretboardSetting('fingerSystem', 'ALL')}
            >
              ALL
            </div>
          </div>
        </div>
        {/*number of fret*/}
        <div className={`${s.item}`}>
          <div>number of fret</div>
          <RangeSlider
            settings={fretboardSettings}
            updateSetting={updateFretboardSetting}
          />
        </div>

        {/*Position*/}
        <div className={`${s.item}`}>
          <div>Position</div>
          {fretboardSettings.fingerSystem === '3NPS' && (
            <div className={`flex gap-1 justify-center items-center`}>
              {Array.from({ length: 7 }, (_, i) => (
                <div
                  key={i}
                  className={`border h-3 w-3 rounded-full cursor-pointer ${
                    fretboardSettings.fingerPosition === i + 1 ? s.selected : ''
                  }`}
                  onClick={() =>
                    updateFretboardSetting('fingerPosition', i + 1)
                  }
                >
                  <div className={`flex justify-center align-center`}>
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>
          )}

          {fretboardSettings.fingerSystem === 'CAGED' && (
            <div className={`flex gap-1 justify-center items-center`}>
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className={`border h-3 w-3 rounded-full cursor-pointer ${
                    fretboardSettings.fingerPosition === i + 1 ? s.selected : ''
                  }`}
                  onClick={() =>
                    updateFretboardSetting('fingerPosition', i + 1)
                  }
                >
                  <div className={`flex justify-center align-center`}>
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/*fret marker*/}
        <div className={`${s.item}`}>
          <div>fretmarkder</div>
        </div>
      </div>
    </>
  );
}
