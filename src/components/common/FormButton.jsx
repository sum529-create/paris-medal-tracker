import ProtoTypes from 'prop-types';
import '../../assets/styles/button.css';

/**
 * FormButton 컴포넌트
 * - Form태그 내부에서 사용할 수 있는 버튼 컴포넌트
 *
 * @param {string} name - 버튼의 이름
 * @param {node} children - 버튼 내에 렌더링될 내용
 */
const FormButton = ({ name, children }) => {
  return (
    <button type="submit" name={name} className="form-button">
      {children}
    </button>
  );
};

FormButton.propTypes = {
  name: ProtoTypes.string.isRequired,
  children: ProtoTypes.node.isRequired,
};

export default FormButton;
