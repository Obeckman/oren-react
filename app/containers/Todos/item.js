import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ToolTip from 'components/ToolTip';
import './style.scss';

export class Item extends React.PureComponent {
  render() {
    const { item } = this.props;
    if (!item) return null;
    return (
      <li className="Item" key={`PhotoGallery-Item-${item.id}`}>
        <div className="title">
          <div>title</div>
          <div>{item.title}</div>
        </div>
        <div className="props">
          <div>ID :{item.id}</div>
          <div>UserID :{item.userId}</div>
        </div>
        <ToolTip
          tiptext={`Todo item ${item.completed ? 'completed' : 'pendding'}`}
        >
          <div className={`status${item.completed ? ' ok' : ''}`} />
        </ToolTip>
      </li>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object,
};

export default connect()(Item);
