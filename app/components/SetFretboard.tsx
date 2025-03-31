// import { useState } from 'react';

import {
  NOTES,
  INSTRUMENTS,
  TUNINGS,
  SCALE_TYPES,
  CHORD_TYPES,
} from '@/lib/music';

// CSS
import s from '@/styles/SetFretboard.module.css';

// other Components
import RangeSlider from './RangeSlider';

export default function SetFretboard({ fretboardState, updateFretboardState }) {
  const selectedNotesArray =
    fretboardState.accidental === 'FLAT' ? NOTES.FLAT : NOTES.SHARP;
  const notesArray = [
    ...selectedNotesArray.slice(3),
    ...selectedNotesArray.slice(0, 3),
  ];

  return (
    <div
      className={`${s.container} grid grid-cols-3 gird-rows-3 gap-x-1 gap-y-1`}
    >
      {/*instrument and tuning*/}
      <div className={`${s.item}`}>
        <div>
          <div className={`hidden`}>instrument</div>
          <select
            id='instrument'
            value={fretboardState.instrument}
            onChange={(e) =>
              updateFretboardState({
                type: 'SET_INSTRUMENT',
                payload: e.target.value,
              })
            }
          >
            {Object.entries(INSTRUMENTS).map(([key, value]) => (
              <option value={key} key={key}>
                {value.NAME}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div className={`hidden`}>tuning</div>
          <select
            id='tuning'
            value={fretboardState.tuning}
            onChange={(e) => {
              updateFretboardState({
                type: 'SET_TUNING',
                payload: e.target.value,
              });
            }}
          >
            {Object.entries(TUNINGS[fretboardState.instrument]).map(
              ([tuningKey, tuningValue]) => (
                <option value={tuningKey} key={tuningKey}>
                  {tuningValue.NAME}
                  {' , '}
                  {tuningValue.TUNING.join(' ')}
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
                onClick={() =>
                  updateFretboardState({
                    type: 'SET_ACCIDENTAL',
                    payload: 'FLAT',
                  })
                }
                className={`${
                  fretboardState.accidental === 'FLAT' ? s.selected : ''
                } cursor-pointer border h-4 w-4 `}
              >
                ♭
              </div>
              <div
                onClick={() =>
                  updateFretboardState({
                    type: 'SET_ACCIDENTAL',
                    payload: 'SHARP',
                  })
                }
                className={`cursor-pointer border h-4 w-4  ${
                  fretboardState.accidental === 'SHARP' ? s.selected : ''
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
                    fretboardState.key === note ? s.selected : ''
                  }`}
                  onClick={() =>
                    updateFretboardState({
                      type: 'SET_KEY',
                      payload: `${note}`,
                    })
                  }
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
            onClick={() =>
              updateFretboardState({
                type: 'SET_MUSIC_SYSTEM',
                payload: 'CHORD',
              })
            }
          >
            <div>chord</div>
          </div>
          <div
            className={`cursor-pointer`}
            onClick={() =>
              updateFretboardState({
                type: 'SET_MUSIC_SYSTEM',
                payload: 'SCALE',
              })
            }
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
            fretboardState.musicSystem === 'SCALE'
              ? fretboardState.scaleType
              : fretboardState.chordType
          }
          onChange={(e) =>
            updateFretboardState({
              type:
                fretboardState.musicSystem === 'SCALE'
                  ? 'SET_SCALE_TYPE'
                  : 'SET_CHORD_TYPE',
              payload: e.target.value,
            })
          }
        >
          {Object.entries(
            fretboardState.musicSystem === 'SCALE' ? SCALE_TYPES : CHORD_TYPES
          ).map(([key, value]) => (
            <option value={key} key={key}>
              {value.NAME}
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
              fretboardState.fingerSystem === '3NPS' ? s.selected : ''
            }`}
            onClick={() =>
              updateFretboardState({
                type: 'SET_FINGER_SYSTEM',
                payload: '3NPS',
              })
            }
          >
            3NPS
          </div>
          <div
            className={`cursor-pointer ${
              fretboardState.fingerSystem === 'CAGED' ? s.selected : ''
            }`}
            onClick={() =>
              updateFretboardState({
                type: 'SET_FINGER_SYSTEM',
                payload: 'CAGED',
              })
            }
          >
            CAGED
          </div>

          <div
            className={`cursor-pointer ${
              fretboardState.fingerSystem === 'ALL' ? s.selected : ''
            }`}
            onClick={() =>
              updateFretboardState({
                type: 'SET_FINGER_SYSTEM',
                payload: 'ALL',
              })
            }
          >
            ALL
          </div>
        </div>
      </div>
      {/*number of fret*/}
      <div className={`${s.item}`}>
        <div>number of fret</div>
        <RangeSlider
          fretboardState={fretboardState}
          updateFretboardState={updateFretboardState}
        />
      </div>

      {/*Position*/}
      <div className={`${s.item}`}>
        <div>Position</div>
        {fretboardState.fingerSystem === '3NPS' && (
          <div className={`flex gap-1 justify-center items-center`}>
            {Array.from({ length: 7 }, (_, i) => (
              <div
                key={i}
                className={`border h-3 w-3 rounded-full cursor-pointer ${
                  fretboardState.fingerPosition === i + 1 ? s.selected : ''
                }`}
                onClick={() =>
                  updateFretboardState({
                    type: 'SET_FINGER_POSITION',
                    payload: i + 1,
                  })
                }
              >
                <div className={`flex justify-center align-center`}>
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        )}

        {fretboardState.fingerSystem === 'CAGED' && (
          <div className={`flex gap-1 justify-center items-center`}>
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className={`border h-3 w-3 rounded-full cursor-pointer ${
                  fretboardState.fingerPosition === i + 1 ? s.selected : ''
                }`}
                onClick={() =>
                  updateFretboardState({
                    type: 'SET_FINGER_POSITION',
                    payload: i + 1,
                  })
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
  );
}
