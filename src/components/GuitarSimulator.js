// GuitarSimulator.js
import { useEffect, useCallback, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const playSound = (note) => {
  const audio = new Audio(`${process.env.PUBLIC_URL}/audio/${note}.mp3`);
  audio.play();
};

const GuitarSimulator = () => {
  const controls = {
    string1: useAnimation(),
    string2: useAnimation(),
    string3: useAnimation(),
    string4: useAnimation(),
    string5: useAnimation(),
    string6: useAnimation(),
  };
  const [currentNote, setCurrentNote] = useState("");

  const animateString = useCallback((string) => {
    controls[string].start({
      x: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.5 },
    });
  }, [controls]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      let note = "";
      let stringId = "";
      switch (event.key) {
        case "ArrowLeft":
          note = "do";
          stringId = "string1";
          break;
        case "ArrowRight":
          note = "re";
          stringId = "string2";
          break;
        case "ArrowUp":
          note = "mi";
          stringId = "string3";
          break;
        case "ArrowDown":
          note = "fa";
          stringId = "string4";
          break;
        default:
          return;
      }
      playSound(note);
      setCurrentNote(note);
      animateString(stringId);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [animateString]);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-800">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 400" width="200" height="400" className="w-48 h-auto">
        <ellipse cx="100" cy="250" rx="60" ry="100" fill="#8B4513" stroke="black" strokeWidth="2"/>
        
        <rect x="85" y="70" width="30" height="180" fill="#D2691E" stroke="black" strokeWidth="2"/>
        
        <motion.line
          animate={controls.string1}
          x1="100"
          y1="70"
          x2="100"
          y2="250"
          stroke="silver"
          strokeWidth="1"
          style={{ transformOrigin: "center" }}
        />
        <motion.line
          animate={controls.string2}
          x1="105"
          y1="70"
          x2="105"
          y2="250"
          stroke="silver"
          strokeWidth="1"
          style={{ transformOrigin: "center" }}
        />
        <motion.line
          animate={controls.string3}
          x1="110"
          y1="70"
          x2="110"
          y2="250"
          stroke="silver"
          strokeWidth="1"
          style={{ transformOrigin: "center" }}
        />
        <motion.line
          animate={controls.string4}
          x1="95"
          y1="70"
          x2="95"
          y2="250"
          stroke="silver"
          strokeWidth="1"
          style={{ transformOrigin: "center" }}
        />
        <motion.line
          animate={controls.string5}
          x1="90"
          y1="70"
          x2="90"
          y2="250"
          stroke="silver"
          strokeWidth="1"
          style={{ transformOrigin: "center" }}
        />
        <motion.line
          animate={controls.string6}
          x1="85"
          y1="70"
          x2="85"
          y2="250"
          stroke="silver"
          strokeWidth="1"
          style={{ transformOrigin: "center" }}
        />
        
        <circle cx="100" cy="100" r="5" fill="black"/>
        <circle cx="100" cy="130" r="5" fill="black"/>
        <circle cx="100" cy="160" r="5" fill="black"/>
        <circle cx="100" cy="190" r="5" fill="black"/>
        <circle cx="100" cy="220" r="5" fill="black"/>
        
        <rect x="85" y="40" width="30" height="30" fill="#D2691E" stroke="black" strokeWidth="2"/>
      </svg>

      {currentNote && (
        <div className="absolute top-10 text-white text-3xl font-bold">
          Nota: {currentNote.toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default GuitarSimulator;