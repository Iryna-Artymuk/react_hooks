import PropTypes from 'prop-types';
import StyledSection from './StyledSection';
export default function Section({ title, children }) {
  return (
    <StyledSection>
      <>
        <h1 className>{title}</h1>
        {children}
      </>
    </StyledSection>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
