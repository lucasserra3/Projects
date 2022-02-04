const Select = ({ lista, onChange, value }) => {
  return (
    <select name="select" onChange={onChange} value={value}>
      {lista.map((item) => (
        <option value={item.value}>{item.label}</option>
      ))}
    </select>
  );
};

export default Select;
