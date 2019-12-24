import React, {Component} from 'react';
import Item from './Item'
import PropTypes from 'prop-types';

class List extends Component {
  render(){
    return this.props.list.map((list) => (
      <Item key={list.id} item={list} toggle={this.props.toggle} delete={this.props.delete} />
    ));
  }
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired
}

export default List;
