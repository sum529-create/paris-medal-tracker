import PropTypes from 'prop-types';
import '../../assets/styles/input.css'

const Input = ({type, name, value, onChange, placeholder, className}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`inputFormat ${className}`}
    />
  )
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string
}

export default Input