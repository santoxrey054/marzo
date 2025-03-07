// import { useState, useEffect } from 'react';
// import { Boton } from './components/button';
// import RosaAnimada from './components/RosaAnimada';
// import './App.css';

// function App() {
//   const [iniciado, setIniciado] = useState(false);
//   const [animando, setAnimando] = useState(false);
//   const [audio] = useState(new Audio('/tu.mp3')); // Archivo en 'public'

//   useEffect(() => {
//     audio.loop = false; // Asegura que no se repita
//     audio.onended = () => console.log("La canción terminó"); // Opcional: Mensaje en consola
//   }, []);

//   // Función para subir el volumen gradualmente
//   const fadeInAudio = () => {
//     audio.volume = 0;
//     audio.play();
//     let vol = 0;
//     const interval = setInterval(() => {
//       if (vol < 1) {
//         vol += 0.05;
//         audio.volume = vol;
//       } else {
//         clearInterval(interval);
//       }
//     }, 200);
//   };

//   // Función para bajar el volumen gradualmente
//   const fadeOutAudio = () => {
//     let vol = 1;
//     const interval = setInterval(() => {
//       if (vol > 0) {
//         vol -= 0.05;
//         audio.volume = vol;
//       } else {
//         clearInterval(interval);
//         audio.pause();
//         audio.currentTime = 0; // Reinicia la canción para futuras veces
//       }
//     }, 200);
//   };

//   const iniciarApp = () => {
//     setAnimando(true);

//     setTimeout(() => {
//       setIniciado(true);
//       fadeInAudio(); // Inicia la música con fade-in
//     }, 500);
//   };

//   return (
//     <div className={`container ${iniciado ? 'fondo-activo' : ''}`}>
//       {!iniciado && <Boton onClick={iniciarApp} animando={animando} />}
      
//       {iniciado && (
//         <>
//           <h1 className="texto-maquina">
//             Solo me bastó pasar un día contigo para saber que eres una gran mujer, feliz día...
//           </h1>
//           <RosaAnimada />
        
//         </>
//       )}
//     </div>
//   );
// }

// export default App;



import { useState, useEffect } from "react";
import Mensaje from "./components/mensaje";
import "./App.css";
import RosaAnimada from "./components/RosaAnimada";

function App() {
  const [iniciado, setIniciado] = useState(false);
  const [animando, setAnimando] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const newAudio = new Audio("/tu.mp3"); // Archivo en 'public'
    newAudio.loop = false;
    newAudio.onended = () => console.log("La canción terminó"); // Opcional: Mensaje en consola
    setAudio(newAudio);
  }, []);

  const fadeInAudio = () => {
    if (!audio) return;
    audio.volume = 0;
    audio.play();
    let vol = 0;
    const interval = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        audio.volume = vol;
      } else {
        clearInterval(interval);
      }
    }, 200);
  };

  const fadeOutAudio = () => {
    if (!audio) return;
    let vol = 1;
    const interval = setInterval(() => {
      if (vol > 0) {
        vol -= 0.05;
        audio.volume = vol;
      } else {
        clearInterval(interval);
        audio.pause();
        audio.currentTime = 0; // Reinicia la canción para futuras veces
      }
    }, 200);
  };

  const iniciarApp = () => {
    setAnimando(true);
    setTimeout(() => {
      setIniciado(true);
      fadeInAudio(); // 🎵 Iniciar música al iniciar la animación
    }, 500);
  };

  return (
    <div className={`container ${iniciado ? "fondo-activo" : ""}`}>
      {!iniciado && (
        <button className={`boton ${animando ? "salida" : ""}`} onClick={iniciarApp}>
          <h2>Iniciar</h2>
        </button>
      )}

      {iniciado && (
        <div className="mensaje-container">
          <Mensaje />
          <RosaAnimada />
        </div>
      )}
    </div>
  );
}

export default App;

