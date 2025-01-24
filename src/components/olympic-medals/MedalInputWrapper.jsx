import PropTypes from 'prop-types';
import '../../assets/styles/input.css'

/**
 * MedalInputWrapper 컴포넌트
 * - 입력 필드와 그에 대한 라벨을 감싸는 래퍼 역할
 * - 라벨과 자식 요소를 받아서 구성된 입력 폼을 렌더링
 * 
 * @param {node} children - 입력 필드 또는 다른 자식 요소들
 * @param {string} labelName - 라벨의 텍스트
 * @param {string} labelFor - 라벨이 연결될 입력 요소의 id
 * @param {string} className - 래퍼 div의 클래스 이름
 */
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