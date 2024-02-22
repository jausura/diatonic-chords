import NoteElement from "./NoteElement";
import { getLoopedArrayItem } from "./theory";
import type { Note } from "./theory";

export default function Chord({
  degree,
  scale,
  numberOfNotes,
}: {
  degree: number;
  scale: Note[];
  numberOfNotes: number;
}) {
  function getChordFromScaleDegree(
    degree: number,
    scale: Note[],
    numberOfTones: number
  ) {
    const chord = [scale[degree]];
    let toneIndex = degree;
    for (let index = 0; index < numberOfTones - 1; index++) {
      toneIndex += 2;
      chord.push(getLoopedArrayItem(scale, toneIndex));
    }
    return chord;
  }

  return (
    <>
      {getChordFromScaleDegree(degree, scale, numberOfNotes).map((note) => (
        <NoteElement key={degree + note} note={note} />
      ))}
    </>
  );
}
