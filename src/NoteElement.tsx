import { Note } from "./theory";
import styled from "styled-components";

const NoteContainer = styled.span`
  text-transform: uppercase;
  display: inline-block;
  font-weight: bold;
  border: 0.5px solid #474747;
  padding: 0.75rem 0.5rem;
  width: 2em;
  text-align: center;
  line-height: 1.5em;
`;

export default function NoteElement({ note }: { note: Note }) {
  return <NoteContainer className="note">{note}</NoteContainer>;
}
