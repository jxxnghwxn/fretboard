import * as fs from 'fs';

const ionian = { name: 'Ionian', degree: [0, 2, 4, 5, 7, 9, 11] };

function generateTnps(degree: number[]): number[][] {
  const tnps: number[][] = [];
  for (let i = 0; i < 6; i++) {
    tnps.push([
      degree[(i * 3) % degree.length],
      degree[(i * 3 + 1) % degree.length],
      degree[(i * 3 + 2) % degree.length],
    ]);
  }
  return tnps;
}

const tnps = generateTnps(ionian.degree);

// JSON 파일로 저장
fs.writeFileSync('tnps.json', JSON.stringify(tnps, null, 2));
