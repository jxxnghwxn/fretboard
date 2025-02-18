'use client';
import { useReducer } from 'react';

import FretboardSet from '@/components/FretboardSet';
import FretboardGet from '@/components/FretboardGet';
import { initialSettings, settingsReducer } from './lib/reducer';

export default function Home() {
  const [settings, dispatch] = useReducer(settingsReducer, initialSettings);

  const updateSetting = (key, value) => {
    dispatch({ type: 'UPDATE_SETTING', payload: { key, value } });
  };

  return (
    <div>
      <div>hello</div>
      <FretboardSet settings={settings} updateSetting={updateSetting} />
      <FretboardGet settings={settings} />
    </div>
  );
}
