const Input = ({ label, name, value, onChange, disabled, type = "text" }) => (
  <div>
    <label className="block mb-1">{label}</label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="w-full px-4 py-2 rounded-md bg-[var(--hero-bg)] border border-[var(--border-color)] text-[var(--text-light)] focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)] disabled:opacity-60"
    />
  </div>
);

export default Input;
