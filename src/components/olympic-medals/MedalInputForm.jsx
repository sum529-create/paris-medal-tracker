import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`
const MedalInputForm = ({handleSubmit, children}) => {
  return (
    <Form onSubmit={handleSubmit}>
      {children}
    </Form>
  );
};

MedalInputForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default MedalInputForm;
