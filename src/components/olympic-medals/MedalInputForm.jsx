import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
  }
`;

/**
 * MedalInputForm 컴포넌트
 * - 폼 제출 핸들러와 자식 요소를 받아 폼을 구성하는 컴포넌트이다.
 *
 * @param {object} param0 - 컴포넌트에 전달되는 props 객체
 * @param {function} param0.handleSubmit - 폼 제출 시 호출되는 함수
 * @param {React.ReactNode} param0.children - 폼 내에 렌더링할 자식 요소들
 */
const MedalInputForm = ({ handleSubmit, children }) => {
  return <Form onSubmit={handleSubmit}>{children}</Form>;
};

MedalInputForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default MedalInputForm;
