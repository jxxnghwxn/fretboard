import { notes } from '@/app/lib/music';

const selectedAccidental = '♭'; // or '♯'
export const selectedNotesArray =
  selectedAccidental === '♭' ? notes.flat : notes.sharp;
