import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import DataList from 'components/DataList';
import Pagination from 'containers/Pagination';
import { loadData, filterChange, pageOfItems } from './actions';
import {
  selectData,
  selectError,
  selectLoading,
  selectFilterValue,
  selectFilterdData,
  selectPageOfItems,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import Item from './item';

import './style.scss';

export class Todos extends React.PureComponent {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    const dataListProps = {
      loading: this.props.loading,
      error: this.props.error,
      data: this.props.pagedItems ? this.props.pagedItems : [],
      componentItem: Item,
    };
    console.info('this.props.filterdData', this.props.filterdData);
    return (
      <div className="Todos">
        <input
          type="text"
          placeholder="filter todos"
          onChange={e => this.props.filterChange(e.target.value)}
        />
        <DataList {...dataListProps} className="TodosList" />
        <Pagination
          items={this.props.filterdData ? this.props.filterdData : []}
          onChangePage={this.props.pageOfItems}
        />
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
    pageOfItems: value => {
      dispatch(pageOfItems(value));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  data: selectData(),
  loading: selectLoading(),
  error: selectError(),
  filterValue: selectFilterValue(),
  filterdData: selectFilterdData(),
  pagedItems: selectPageOfItems(),
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
