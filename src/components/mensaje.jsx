import { useState, useEffect } from "react";

function Mensaje() {
  const textoCompleto = "Solo me bastó pasar un día contigo para saber que eres una gran mujer, feliz día...";
  const [texto, setTexto] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < textoCompleto.length) { // ✅ Evita que siga ejecutándose cuando llega al final
        setTexto(textoCompleto.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Velocidad de la animación

    return () => clearInterval(interval);
  }, []);

  return <h1 className="texto-maquina">{texto}</h1>;
}

export default Mensaje;
