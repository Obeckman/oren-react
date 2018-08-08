import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Image from 'components/Img';
import './style.scss';

export class Item extends React.PureComponent {
  render() {
    const { item } = this.props;
    if (!item) return null;
    return (
      <li className="Item" key={`PhotoGallery-Item-${item.id}`}>
        <Image src={item.thumbnailUrl} alt={item.title} />
        <div className="title">{item.title}</div>
        <div className="props">
          <div>{item.albumId}</div>
          <div>{item.id}</div>
          <div>{item.url}</div>
        </div>
      </li>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object,
};

export default connect()(Item);
