interface NoteInfo {
  string: number;
  fret: number;
  note: string;

  isInScale: boolean;
  interval: string;
}

interface FretboardState {
  instrument: string;
  tuning: string;

  range: {
    string: [number, number];
    fret: [number, number];
  };

  key: string;
  accidental: string;
  musicSystem: string;
  scaleType: string;
  chordType: string;

  fingerSystem: '3NPS' | 'CAGED' | 'ALL';
  fingerPosition: number;

  display: {
    mode: 'NAMES' | 'DEGREES' | 'HIDDEN';
    highlightIntervals: {
      root: boolean;
      third: boolean;
      fifth: boolean;
      seventh: boolean;
      ninth: boolean;
      eleventh: boolean;
      thirteenth: boolean;
    };
  };
}

export const InitFretboardState: FretboardState = {
  instrument: 'GUITAR_6S',
  tuning: 'STANDARD',
  range: {
    string: [1, 6],
    fret: [1, 24],
  },

  key: 'C',
  accidental: 'FLAT',
  musicSystem: 'SCALE',
  scaleType: 'IONIAN',
  chordType: 'MAJ7',

  // 운지법
  fingerSystem: '3NPS',
  fingerPosition: 1,

  // 표시 옵션
  display: {
    mode: 'NAMES',
    highlightIntervals: {
      root: true,
      third: true,
      fifth: false,
      seventh: true,
      ninth: false,
      eleventh: false,
      thirteenth: false,
    },
  },
};

type FretboardAction =
  | { type: 'SET_INSTRUMENT'; payload: string }
  | { type: 'SET_TUNING'; payload: string }
  | {
      type: 'SET_RANGE';
      payload: { string: [number, number]; fret: [number, number] };
    }
  | { type: 'SET_KEY'; payload: string }
  | { type: 'SET_ACCIDENTAL'; payload: string }
  | { type: 'SET_MUSIC_SYSTEM'; payload: string }
  | { type: 'SET_SCALE_TYPE'; payload: string }
  | { type: 'SET_CHORD_TYPE'; payload: string }
  | { type: 'SET_FINGER_SYSTEM'; payload: '3NPS' | 'CAGED' | 'ALL' }
  | { type: 'SET_FINGER_POSITION'; payload: number }
  | { type: 'SET_DISPLAY_MODE'; payload: 'NAMES' | 'DEGREES' | 'HIDDEN' }
  | {
      type: 'TOGGLE_INTERVAL_HIGHLIGHT';
      payload: keyof FretboardState['display']['highlightIntervals'];
    };

export function fretboardReducer(
  state: FretboardState,
  action: FretboardAction
): FretboardState {
  switch (action.type) {
    case 'SET_INSTRUMENT':
      return { ...state, instrument: action.payload };
    case 'SET_TUNING':
      return { ...state, tuning: action.payload };
    case 'SET_RANGE':
      return { ...state, range: action.payload };
    case 'SET_KEY':
      return { ...state, key: action.payload };
    case 'SET_ACCIDENTAL':
      return { ...state, accidental: action.payload };
    case 'SET_MUSIC_SYSTEM':
      return { ...state, musicSystem: action.payload };
    case 'SET_SCALE_TYPE':
      return { ...state, scaleType: action.payload };
    case 'SET_CHORD_TYPE':
      return { ...state, chordType: action.payload };
    case 'SET_FINGER_SYSTEM':
      return { ...state, fingerSystem: action.payload };
    case 'SET_FINGER_POSITION':
      return { ...state, fingerPosition: action.payload };
    case 'SET_DISPLAY_MODE':
      return { ...state, display: { ...state.display, mode: action.payload } };
    case 'TOGGLE_INTERVAL_HIGHLIGHT':
      return {
        ...state,
        display: {
          ...state.display,
          highlightIntervals: {
            ...state.display.highlightIntervals,
            [action.payload]: !state.display.highlightIntervals[action.payload],
          },
        },
      };
    default:
      return state;
  }
}
