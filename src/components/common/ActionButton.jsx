import PropTypes from 'prop-types'
import '../../assets/styles/button.css'

const ActionButton = ({eventHandler, id, children}) => {
  return (
    <button
      className='actionButton'
      onClick={() => eventHandler(id)}
    >
      {children}
    </button>
  )
}

ActionButton.propTypes = {
  eventHandler: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default ActionButton