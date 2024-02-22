import { useEffect, useState } from "react";
import { allNotes, scales, getScale } from "./theory";
import type { Note } from "./theory";
import ScaleDegree from "./ScaleDegree";
import Chord from "./Chord";

function App() {
  const [root, setRoot] = useState<Note>("a");
  const [currentScale, setCurrentScale] = useState<Note[]>(
    getScale(root, scales.major)
  );

  useEffect(() => {
    setCurrentScale([...getScale(root, scales.major)]);
  }, [root]);
  function changeRoot(e: React.ChangeEvent<HTMLSelectElement>) {
    setRoot(e.target.value as Note);
  }
  return (
    <>
      <div className="container">
        <div className="key-container">
          <h1>Select Key</h1>
          <select value={root} onChange={changeRoot}>
            {allNotes.map((note) => (
              <option key={`option-${note}`} value={note}>
                {note}
              </option>
            ))}
          </select>
          <h1>
            Major Triad:{" "}
            <Chord degree={0} scale={currentScale} numberOfNotes={3} />
          </h1>
          <table>
            <thead>
              <tr>
                <th>Degree</th>
                <th>Note</th>
                <th>Mode</th>
                <th>Chord Flavor</th>
                <th>Seventh Chord</th>
              </tr>
            </thead>
            <tbody>
              {currentScale.map((note, index) => (
                <ScaleDegree
                  key={`list-${note}`}
                  note={note}
                  degree={index}
                  currentScale={currentScale}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
