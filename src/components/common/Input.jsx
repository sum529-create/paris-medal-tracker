import PropTypes from 'prop-types';
import '../../assets/styles/input.css';

/**
 * Input 컴포넌트
 * - 사용자로부터 텍스트나 숫자를 입력받는 필드를 제공.
 * - 다양한 유형(type)의 입력을 지원하며, `onChange` 이벤트를 통해 입력 값이 변경됨
 *
 * @param {string} type - 입력 필드의 유형 (예: 'text', 'number', 'email' 등)
 * @param {string} name - 입력 필드의 이름 (폼 전송 시 사용)
 * @param {string} id - 입력 필드의 고유 ID (접근성 또는 스타일링에 사용)
 * @param {string} value - 입력 필드의 현재 값
 * @param {function} onChange - 입력 값이 변경될 때 호출되는 함수
 * @param {string} placeholder - 입력 필드에 표시될 힌트 텍스트
 * @param {string} className - 추가적인 CSS 클래스를 추가할 수 있는 옵션
 */
const Input = ({ type, name, id, value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      min={type === 'number' && '0'}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input-format ${className}`}
    />
  );
};
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
