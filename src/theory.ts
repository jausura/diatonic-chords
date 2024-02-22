export type Note =
  | "c"
  | "c♯"
  | "d"
  | "d♯"
  | "e"
  | "f"
  | "f♯"
  | "g"
  | "g♯"
  | "a"
  | "a♯"
  | "b"
  | "d♭"
  | "e♭"
  | "g♭"
  | "a♭"
  | "b♭";

export const allNotes: Note[] = [
  "c",
  "c♯",
  "d",
  "d♯",
  "e",
  "f",
  "f♯",
  "g",
  "g♯",
  "a",
  "a♯",
  "b",
  "d♭",
  "e♭",
  "g♭",
  "a♭",
  "b♭",
];

const notesInSharpScale: Note[] = [
  "c",
  "c♯",
  "d",
  "d♯",
  "e",
  "f",
  "f♯",
  "g",
  "g♯",
  "a",
  "a♯",
  "b",
];

const notesInFlatScale: Note[] = [
  "c",
  "d♭",
  "d",
  "e♭",
  "e",
  "f",
  "g♭",
  "g",
  "a♭",
  "a",
  "b♭",
  "b",
];

type ScaleDegree = {
  number: string;
  name: string;
  seventhChordType: "major" | "minor" | "half diminished" | "dominant";
};

export const scaleDegrees: ScaleDegree[] = [
  { number: "I", name: "Ionian", seventhChordType: "major" },
  { number: "II", name: "Dorian", seventhChordType: "minor" },
  { number: "III", name: "Phrygian", seventhChordType: "minor" },
  { number: "IV", name: "Lydian", seventhChordType: "major" },
  { number: "V", name: "Mixolydian", seventhChordType: "dominant" },
  { number: "VI", name: "Aeolian", seventhChordType: "minor" },
  { number: "VII", name: "Locrian", seventhChordType: "half diminished" },
];

type Scale = {
  scaleType: "MAJOR" | "MINOR";
  semitones: number[];
};

type Scales = {
  [key: string]: Scale;
};

export const scales: Scales = {
  major: {
    scaleType: "MAJOR",
    semitones: [2, 4, 5, 7, 9, 11],
  },
  minor: {
    scaleType: "MINOR",
    semitones: [2, 3, 5, 7, 9, 10],
  },
};

export function getScale(root: Note, scale: Scale): Note[] {
  const { semitones } = scale;
  let notes = notesInSharpScale;
  if (root === "f" || root[1] === "♭") {
    notes = notesInFlatScale;
  }

  const rootIndex = notes.indexOf(root);
  const thisScale = [root];
  thisScale.push(
    ...semitones.map((semitone) =>
      getLoopedArrayItem(notes, rootIndex + semitone)
    )
  );
  return thisScale;
}

export function getLoopedArrayItem(array: Note[], index: number) {
  return array[index % array.length];
}
