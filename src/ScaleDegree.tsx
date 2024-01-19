import Chord from "./Chord";
import NoteElement from "./NoteElement";
import type { Note } from "./theory";

import { scaleDegrees } from "./theory";

// Need:
// Mode - done
// Triad with name - done
// available extensions
// note component -done

export default function ScaleDegree({
  note,
  degree,
  currentScale,
}: {
  note: Note;
  degree: number;
  currentScale: Note[];
}) {
  return (
    <tr>
      <td>
        <NoteElement note={note} />
      </td>
      <td>{scaleDegrees[degree].name}</td>
      <td>{scaleDegrees[degree].seventhChordType}</td>
      <td>
        <Chord degree={degree} scale={currentScale} numberOfNotes={4} />
      </td>
    </tr>
  );
}
