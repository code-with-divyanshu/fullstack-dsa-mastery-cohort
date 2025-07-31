import { useState } from "react";
import FacialExpression from "../components/FacialExpression";
import MoodSongs from "../components/MoodSongs";

function App() {
  const [songs, setSongs] = useState([]);

  return (
    <div className="bg-black min-h-screen w-full px-10">
      <FacialExpression setSongs={setSongs} />
      <MoodSongs songs={songs} />
    </div>
  );
}

export default App;
