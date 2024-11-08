import { useEffect, useCallback, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const playSound = (note) => {
  const audio = new Audio(`${process.env.PUBLIC_URL}/audio/piano/${note}.mp3`);
  audio.play();
};

const PianoSimulator = () => {
  const controls = {
    keyC: useAnimation(),
    keyD: useAnimation(),
    keyE: useAnimation(),
    keyF: useAnimation(),
    keyG: useAnimation(),
    keyA: useAnimation(),
    keyB: useAnimation(),
  };

  const [currentNote, setCurrentNote] = useState("");

  const animateKey = useCallback(
    (key) => {
      controls[key].start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.3 },
      });
    },
    [controls]
  );

  useEffect(() => {
    const handleKeyPress = (event) => {
      let note = "";
      let keyId = "";
      switch (event.key.toLowerCase()) {
        case "a":
          note = "do";
          keyId = "keyC";
          break;
        case "s":
          note = "re";
          keyId = "keyD";
          break;
        case "d":
          note = "mi";
          keyId = "keyE";
          break;
        case "f":
          note = "fa";
          keyId = "keyF";
          break;
        case "g":
          note = "sol";
          keyId = "keyG";
          break;
        case "h":
          note = "la";
          keyId = "keyA";
          break;
        case "j":
          note = "si";
          keyId = "keyB";
          break;
        default:
          return;
      }
      playSound(note);
      setCurrentNote(note);
      animateKey(keyId);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [animateKey]);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 400"
        width="600"
        height="400"
        className="w-3/4 h-auto"
      >
        <rect
          x="50"
          y="150"
          width="500"
          height="200"
          fill="#000000"
          stroke="black"
          strokeWidth="2"
        />

        {["C", "D", "E", "F", "G", "A", "B"].map((note, index) => (
          <motion.rect
            key={note}
            animate={controls[`key${note}`]}
            x={100 + index * 70}
            y={150}
            width="60"
            height="200"
            fill="#ffffff"
            stroke="#000000"
            strokeWidth="1"
            className="cursor-pointer"
          />
        ))}
      </svg>

      {currentNote && (
        <div className="absolute top-10 text-white text-3xl font-bold">
          Nota: {currentNote.toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default PianoSimulator;
