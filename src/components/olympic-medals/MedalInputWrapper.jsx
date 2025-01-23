import PropTypes from 'prop-types';
import '../../assets/styles/input.css'

const MedalInputWrapper = ({children, labelName, labelFor, className}) => {
  return (
    <div className={className}>
      <label htmlFor={labelFor}>{labelName}</label>
      {children}
    </div>
  )
}

MedalInputWrapper.propTypes = {
  children: PropTypes.node,
  labelName: PropTypes.string,
  labelFor: PropTypes.string,
  className: PropTypes.string
}

export default MedalInputWrapper