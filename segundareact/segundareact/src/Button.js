const Button = ({ texto, selected, onClick }) => (
    <button
      onClick={onClick}
      className={`Button ${selected ? "Button-selected" : ""}`}
    >
      {texto}
    </button>
  );
  
  export default Button;