import PropTypes from 'prop-types';
import '../../assets/styles/input.css'

const Input = ({type, name, id, value, onChange, placeholder, className}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      min={type === 'number' && "0"}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input-format ${className}`}
    />
  )
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string
}

export default Input