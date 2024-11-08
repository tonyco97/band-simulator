import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-xl font-bold">
          Home
        </Link>
        {/* Aggiungi altri link se necessario */}
      </div>
    </nav>
  );
};

export default Navbar;