import ProtoTypes from 'prop-types'

const Button = ({name, className, children}) => {
  return (
    <button type="submit" name={name} className={className}>
      {children}
    </button>
  )
}

Button.propTypes = {
  name: ProtoTypes.string.isRequired,
  children: ProtoTypes.node.isRequired,
  className: ProtoTypes.string,
}

export default Button