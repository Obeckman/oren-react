import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
//  import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { loadData } from './actions';
import { selectPhotos, selectError, selectLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class PhotoGallery extends React.PureComponent {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    // console.info('this.props.photos', this.props.photos);
    // console.info('this.props', this.props);
    // const { loading, error, photos } = this.props;
    // const reposListProps = {
    //   loading,
    //   error,
    //   photos,
    // };

    return (
      <div>
        <Helmet>
          <title>PhotoGallery </title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div>

          PhotoGallery
          {console.warn("PhotoGallery render",this.props)}
          {/* {this.props.photos} */}
        </div>
      </div>
    );
  }
}

PhotoGallery.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  photos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      dispatch( loadData() );
    },
  };
}

const mapStateToProps = createStructuredSelector({
  photos: selectPhotos(),
  loading: selectLoading(),
  error: selectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'PhotoGallery', reducer });
const withSaga = injectSaga({ key: 'PhotoGallery', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PhotoGallery);
