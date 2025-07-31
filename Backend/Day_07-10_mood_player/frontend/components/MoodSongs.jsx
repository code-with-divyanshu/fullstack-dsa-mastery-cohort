import { useState } from "react";

const MoodSongs = ({ songs }) => {
  const [isplaying, setIsPlaying] = useState(null);

  const handlePlayPause = (index) => {
    if (isplaying === index) {
      setIsPlaying(null);
    } else {
      setIsPlaying(index);
    }
  };
  return (
    <div className="w-full p-16 pt-0 font-serif text-white ">
      <h2 className="mb-4 text-2xl">Recommended Songs</h2>
      {songs.map((song, index) => (
        <div className="flex w-full justify-between my-2" key={index}>
          <div className="title">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
          <div className="buttons">
            {isplaying === index && (
              <audio
                src={song.audio}
                className="hidden"
                autoPlay={isplaying === index}
              ></audio>
            )}
            <button onClick={() => handlePlayPause(index)} className="text-xl">
              {isplaying === index ? (
                <i className="ri-pause-line"></i>
              ) : (
                <i className="ri-play-circle-fill"></i>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSongs;
