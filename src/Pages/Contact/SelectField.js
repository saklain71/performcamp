const SelectField = (props) => {
    const { label, handleChange, name } = props;
    return (
      <div className="mb-5">
        <label className="text-white text-sm" htmlFor={name}>{label}</label>
        <select onChange={handleChange} defaultValue="role" name={name} className="w-full border-b-2 py-2 outline-none">
          <option value="role" disabled>Choose Role</option>
          <option value="hr" className="py-1">HR</option>
          <option value="employee" className="py-1">Employee</option>
          <option value="visitor" className="py-1">Visitor</option>
        </select>
      </div>
    )
  }
  
  export default SelectField