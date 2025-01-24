import styled from 'styled-components';
import PropTypes from 'prop-types';

const InfoInnerText = styled.span`
  grid-column: span 3;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #6b7280;
  align-self: center;
  padding-left: 1rem;
  position: relative;
  display: inline-block;

  &::before {
    content: '※';
    position: absolute;
    top: -1px;
    left: 5px;
    align-self: center;
  }
  @media (max-width: 768px) {
    grid-column: span 6;
  }
`;
/**
 * InfoText 컴포넌트
 * - 안내 문구 텍스트 관련 컴포넌트
 *
 * @param {node} children - span 내에 렌더링 될 내용
 */
const InfoText = ({ children }) => {
  return <InfoInnerText>{children}</InfoInnerText>;
};

InfoText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfoText;
