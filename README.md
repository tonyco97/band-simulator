# Musical Instruments Simulator

![App Screenshot](screenshot.png)

## Description

The **Musical Instruments Simulator** is an interactive web application developed with **React** and **Tailwind CSS**, allowing users to virtually play various musical instruments directly from their browser. Currently, the app includes simulations of a **Guitar** and a **Piano**, each with animations and sounds that respond to keyboard inputs.

## Features

- **Guitar**

  - Play notes using the arrow keys (`ArrowLeft`, `ArrowRight`, `ArrowUp`, `ArrowDown`).
  - Animations of strings vibrating corresponding to the played note.

- **Piano**
  - Play notes using the keys `A`, `S`, `D`, `F`, `G`, `H`, `J` for the notes C, D, E, F, G, A, B.
  - Animations of the keys slightly enlarging during note playback.

## Preview

![Guitar Preview](guitar-screenshot.png)  
_Interface of the guitar simulator._

![Piano Preview](piano-screenshot.png)  
_Interface of the piano simulator._

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: CSS framework for rapid and customizable styling.
- **Framer Motion**: Library for smooth animations in React.
- **React Router DOM**: Routing management within the application.

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/musical-instruments-simulator.git
   ```

2. **Navigate to the project folder**

   ```bash
   cd musical-instruments-simulator
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

   or, if you're using Yarn:

   ```bash
   yarn install
   ```

4. **Start the application in development mode**

   ```bash
   npm start
   ```

   or:

   ```bash
   yarn start
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

- **Guitar**

  - Press the arrow keys (`ArrowLeft`, `ArrowRight`, `ArrowUp`, `ArrowDown`) to play different notes.
  - The guitar strings will animate corresponding to the note played.

- **Piano**
  - Press the keys `A`, `S`, `D`, `F`, `G`, `H`, `J` on your keyboard to play the notes C, D, E, F, G, A, B respectively.
  - The piano keys will slightly enlarge during note playback.

## Project Structure

```bash
src/
├── components/
│   ├── Navbar.js
│   ├── Home.js
│   ├── GuitarSimulator.js
│   ├── PianoSimulator.js
│   └── ...
├── assets/
│   ├── Guitar.svg
│   ├── Piano.svg
│   └── ...
├── audio/
│   ├── guitar/
│   │   ├── do.mp3
│   │   ├── re.mp3
│   │   └── ...
│   ├── piano/
│   │   ├── do.mp3
│   │   ├── re.mp3
│   │   └── ...
│   └── ...
├── App.js
├── index.js
├── index.css
└── tailwind.config.js
```

## Tailwind CSS Configuration

Ensure that Tailwind CSS is correctly configured by adding the necessary classes and customizing `tailwind.config.js` according to your needs.

## Contributing

Contributions are welcome! Follow these steps to contribute to the project:

1. **Fork the repository**

2. **Create a branch for your feature**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit your changes**

   ```bash
   git commit -m "Add description of your feature"
   ```

4. **Push the branch**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**

   Make sure to clearly describe the changes made and to follow the project's guidelines.

## License

Distributed under the MIT License.

## Contact

For more information or questions, you can contact me at [tonyco97.tc@gmail.com](mailto:tonyco97.tc@gmail.com).

---

**Note:** Ensure that you add the required audio files in the `audio` folder and replace the preview images with actual screenshots of the application to enhance the project's presentation.
