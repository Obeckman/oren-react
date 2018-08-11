//  based on http://jasonwatmore.com/post/2017/03/14/react-pagination-example-with-logic-like-google
import React from 'react';
import PropTypes from 'prop-types';
import { compare2ObjectsByJSON } from 'utils/objectCompare';
import './style.scss';
const propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number,
};

const defaultProps = {
  initialPage: 1,
  pageSize: 10,
};
export class Pagination extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  componentWillMount() {
    // set page if items array isn't empty
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    const { items, pageSize } = this.props;
    const pager = this.getPager(items.length, page, pageSize);

    if (!compare2ObjectsByJSON(pager, this.state.pager)) {
      this.setState({ pager });
      this.props.onChangePage(
        items.slice(pager.startIndex, pager.endIndex + 1),
      );
    }
  }

  getPager(totalItems, currentPage, pageSize) {
    currentPage = currentPage || 1;
    pageSize = pageSize || 10;

    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = [...Array(endPage + 1 - startPage).keys()].map(
      i => startPage + i,
    );

    // return object with all pager properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    };
  }

  render() {
    const pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }

    return (
      <ul className="pagination">
        <li
          className={pager.currentPage === 1 ? 'disabled' : ''}
          onClick={() => this.setPage(1)}
        >
          First
        </li>
        <li
          className={pager.currentPage === 1 ? 'disabled' : ''}
          onClick={() => this.setPage(pager.currentPage - 1)}
        >
          Previous
        </li>
        {pager.pages.map((page, index) => (
          <li
            key={index}
            className={pager.currentPage === page ? 'active' : ''}
            onClick={() => this.setPage(page)}
          >
            {page}
          </li>
        ))}
        <li
          className={pager.currentPage === pager.totalPages ? 'disabled' : ''}
          onClick={() => this.setPage(pager.currentPage + 1)}
        >
          Next
        </li>
        <li
          className={pager.currentPage === pager.totalPages ? 'disabled' : ''}
          onClick={() => this.setPage(pager.totalPages)}
        >
          Last
        </li>
      </ul>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;
