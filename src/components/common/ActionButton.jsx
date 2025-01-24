import PropTypes from 'prop-types'
import '../../assets/styles/button.css'

/**
 * ActionButton 컴포넌트
 * - 특정 액션을 수행하는 버튼을 렌더링한다.
 * 
 * @param {function} eventHandler - 버튼 클릭 시 실행할 함수
 * @param {string} id - 버튼에 고유 식별자로 사용되는 id
 * @param {node} children - 버튼 내에 렌더링될 내용
 */
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