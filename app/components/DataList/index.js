import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import Ul from './Ul';
import Li from './Li';

function DataList({ loading, error, data, componentItem, className }) {
  const ComponentToRender = componentItem;
  let content = <div />;
  if (error) {
    const ErrorComponent = () => (
      <Li item="Something went wrong, please try again!" />
    );
    return <Ul component={ErrorComponent} />;
  } else if (loading) {
    return <ComponentToRender component={LoadingIndicator} />;
  } else if (data) {
    content = data.map(item => (
      <ComponentToRender key={`item-${item.id}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return <Ul className={className}> {content} </Ul>;
}

DataList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  data: PropTypes.any,
  componentItem: PropTypes.any,
  className: PropTypes.any,
};

export default DataList;
