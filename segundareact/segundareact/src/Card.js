const Card = ({ children, selected, onClick }) => (
    <div onClick={onClick} className={`card ${selected ? "card-selected" : ""}`}>
      {children}
    </div>
  );
  
  export default Card;