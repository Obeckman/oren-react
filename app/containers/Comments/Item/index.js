import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from 'components/ListItem';
import Image from 'components/Img';

import '../style.scss';
// {
//   "postId": 1,
//   "id": 1,
//   "name": "id labore ex et quam laborum",
//   "email": "Eliseo@gardner.biz",
//   "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// }
export class Item extends React.PureComponent {
  render() {
    const { item } = this.props;
    if (!item) return null;
    return (
      <li className="Item" key={`PhotoGallery-Item-${item.id}`}>
        <div className="header">
          <div>
            <span>name</span>
            {item.name}
          </div>
          <div>
            <span>email</span>
            {item.email}
          </div>
        </div>
        <div className="body">
          <span>body</span>
          {item.body}
        </div>
        <div className="fotter">
          <div>
            <span>postId</span>
            {item.postId}
          </div>
          <div>
            <span>id</span>
            {item.id}
          </div>
        </div>
      </li>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object,
};

export default connect()(Item);
