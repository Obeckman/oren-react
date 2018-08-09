import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { loadData, filterChange } from './actions';
import {
  selectData,
  selectError,
  selectLoading,
  selectFilterValue,
  selectFilterdData,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import Item from './item';
import DataList from 'components/DataList';
import './style.scss';

export class Todos extends React.PureComponent {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    const dataListProps = {
      loading: this.props.loading,
      error: this.props.error,
      data: this.props.filterdData ? this.props.filterdData.slice(0, 10) : [],
      componentItem: Item,
    };

    return (
      <div className="Todos">
        <input
          type="text"
          placeholder="filter todos"
          onChange={e => this.props.filterChange(e.target.value)}
        />
        <DataList {...dataListProps} className="TodosList" />
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      dispatch(loadData());
    },
    filterChange: value => {
      dispatch(filterChange(value));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  data: selectData(),
  loading: selectLoading(),
  error: selectError(),
  filterValue: selectFilterValue(),
  filterdData: selectFilterdData(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'Todos', reducer });
const withSaga = injectSaga({ key: 'Todos', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Todos);
