export function Boton({ onClick, animando }) {
    return (
      <div className={`boton ${animando ? 'salida' : ''}`} onClick={onClick}>
        <h2>Iniciar</h2>
      </div>
    );
  }
  