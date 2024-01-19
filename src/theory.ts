export type Note =
  | "c"
  | "c #"
  | "d"
  | "d #"
  | "e"
  | "f"
  | "f #"
  | "g"
  | "g #"
  | "a"
  | "a #"
  | "b";

export const notes: Note[] = [
  "c",
  "c #",
  "d",
  "d #",
  "e",
  "f",
  "f #",
  "g",
  "g #",
  "a",
  "a #",
  "b",
];

type ScaleDegree = {
  name: string;
  seventhChordType: "major" | "minor" | "half diminished" | "dominant";
};

export const scaleDegrees: ScaleDegree[] = [
  { name: "Ionian", seventhChordType: "major" },
  { name: "Dorian", seventhChordType: "minor" },
  { name: "Phrygian", seventhChordType: "minor" },
  { name: "Lydian", seventhChordType: "major" },
  { name: "Mixolydian", seventhChordType: "dominant" },
  { name: "Aeolian", seventhChordType: "minor" },
  { name: "Locrian", seventhChordType: "half diminished" },
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
