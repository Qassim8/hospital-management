const FormInput = ({ label, name, type = "text", value, onChange, placeholder }) => (
  <div className="mb-4 flex-1">
    <label className="block text-sm font-medium mb-2">{label}</label>
        <input
          type={type}
      name={name}
      value={value}
            onChange={onChange}
            placeholder={placeholder}
      className="w-full border rounded p-2"
    />
  </div>
);
export default FormInput;
