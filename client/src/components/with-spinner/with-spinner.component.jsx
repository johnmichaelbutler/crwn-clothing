import React from 'react';
import Spinner from '../spinner/spinner.component';

// HOC - Takes a component as an arg. isLoading takes a boolean. If true, returns our spinner
// If false, will render the wrapped component with other props passed into it
const withSpinner = WrappedComponent => ({ isLoading, ...otherProps}) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
};

export default withSpinner;