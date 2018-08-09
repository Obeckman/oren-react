import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import DataList from 'components/DataList';
import { loadData } from './actions';
import { selectComments, selectError, selectLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Item from './Item';

/* eslint-disable react/prefer-stateless-function */
export class Comments extends React.PureComponent {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { loading, error, comments } = this.props;
    console.info('comments render comments', comments);
    const dataListProps = {
      loading,
      error,
      data: comments ? comments.slice(0, 10) : [],
      componentItem: Item,
    };
    console.info('comments render dataListProps', dataListProps);
    return (
      <div className="CommentsPage">
        <Helmet>
          <title>comments </title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div>
          Comments
          <DataList {...dataListProps} className="CommentsList" />
          {/* {this.props.photos} */}
        </div>
      </div>
    );
  }
}

Comments.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  comments: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      dispatch(loadData());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  comments: selectComments(),
  loading: selectLoading(),
  error: selectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'Comments', reducer });
const withSaga = injectSaga({ key: 'Comments', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Comments);
