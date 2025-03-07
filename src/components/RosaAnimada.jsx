import { useEffect, useState } from "react";
import "./RosaAnimada.css";

function RosaAnimada() {
  const [mostrarRosa, setMostrarRosa] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMostrarRosa(true);
    }, 5000); // La rosa aparece después del texto
  }, []);

  return (
    <div className={`rosa-container ${mostrarRosa ? "mostrar" : ""}`}>
      <div className="flor">
        <div className="petalo petalo1"></div>
        <div className="petalo petalo2"></div>
        <div className="petalo petalo3"></div>
        <div className="petalo petalo4"></div>
        <div className="centro"></div>
      </div>
      <div className="tallo">
        <div className="hoja hoja-izquierda"></div>
        <div className="hoja hoja-derecha"></div>
        <div className="hoja hoja-izquierda2"></div>
        <div className="hoja hoja-derecha2"></div>
      </div>
    </div>
  );
}

export default RosaAnimada;
