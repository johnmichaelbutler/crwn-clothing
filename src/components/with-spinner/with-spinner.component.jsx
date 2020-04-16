import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// HOC - Takes a component as an arg. isLoading takes a boolean. If true, returns our spinner
// If false, will render the wrapped component with other props passed into it
const withSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps}) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    )
  }
  return Spinner;
}

export default withSpinner;