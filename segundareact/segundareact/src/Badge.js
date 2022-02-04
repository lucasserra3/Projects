const Etiqueta = ({ texto, color }) => (
    <div className={`targeta targeta-${color}`}>{texto}</div>
  );
  
  export default Etiqueta;