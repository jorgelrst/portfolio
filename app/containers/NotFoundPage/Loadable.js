/**
 * Asynchronously loads the component for NotFoundPage
 */
import React from 'react';
import Loadable from 'react-loadable';

// import LoadingIndicator from 'components/LoadingIndicator';
const loadComp = () => {
  return <div>hi</div>;
 }
export default Loadable({
  loader: () => import('./index'),
  loading: loadComp,
});
