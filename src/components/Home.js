import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const instruments = [
    { name: "Chitarra", path: "/guitar" },
    { name: "Pianoforte", path: "/piano" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-5xl mb-10">Simulatore di Strumenti Musicali</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {instruments.map((instrument) => (
          <Link
            key={instrument.name}
            to={instrument.path}
            className="bg-gray-700 hover:bg-gray-600 p-6 rounded-lg text-center text-2xl transition duration-300"
          >
            {instrument.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;