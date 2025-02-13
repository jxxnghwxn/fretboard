'use client';
import { useState } from 'react';

import FretboardSet from '@/components/FretboardSet';
import FretboardGet from '@/components/FretboardGet';

export default function Home() {
  const [settings, setSettings] = useState({
    instrument: 'guitar',
    tuning: 'standard',
    accidental: 'flat',
    key: 'c',
    harmonySet: 'scale',
    system: 'ionian',
    fingerSystem: '3nps',
    numberOffFret: 14,
    fretmarker: { note: 'note', degree: 'degree', none: 'none' },
  });
  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <div>hello</div>
      <FretboardSet settings={settings} updateSetting={updateSetting} />
      <FretboardGet settings={settings} />
    </div>
  );
}
