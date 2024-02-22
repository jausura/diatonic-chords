import styled from "styled-components";
import Chord from "./Chord";
import NoteElement from "./NoteElement";
import type { Note } from "./theory";

import { scaleDegrees } from "./theory";

const DegreeRow = styled.tr<{ degree: number }>`
  color: color-mix(in srgb, #e1560c ${(props) => props.degree * 10}%, #474747);
  & .note {
    border-color: color-mix(
      in srgb,
      #e1560c ${(props) => props.degree * 10}%,
      #474747
    );
  }
`;

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
    <DegreeRow degree={degree}>
      <td>{scaleDegrees[degree].number}</td>
      <td>
        <NoteElement note={note} />
      </td>
      <td>{scaleDegrees[degree].name}</td>
      <td>{scaleDegrees[degree].seventhChordType}</td>
      <td>
        <Chord degree={degree} scale={currentScale} numberOfNotes={4} />
      </td>
    </DegreeRow>
  );
}
