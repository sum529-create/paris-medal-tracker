import ProtoTypes from 'prop-types'
import '../../assets/styles/button.css'

const FormButton = ({name, children}) => {
  return (
    <button type="submit" name={name} className='formButton'>
      {children}
    </button>
  )
}

FormButton.propTypes = {
  name: ProtoTypes.string.isRequired,
  children: ProtoTypes.node.isRequired,
}

export default FormButton