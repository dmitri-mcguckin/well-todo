import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  style = () => {
    return { margin: '0 auto', border: '1px solid #999', background: '#dcdcdc', padding: '0.6em', width: '75vw', textDecoration: this.props.item.completed ? 'line-through' : 'none' };
  }

  render(){
    const { id, title } = this.props.item
    var e = (
        <p style={this.style()}>
          <input type='checkbox' onChange={this.props.toggle.bind(this, id)} /> {' '}
          {title}
          <button style={buttonStyle} onClick={this.props.delete.bind(this, id)}>x</button>
        </p>
    );
    return e;
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}

const buttonStyle = {
  float: 'right',
  padding: '0.1em 0.4em',
  color: '#dcdcdc',
  backgroundColor: '#f00',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer'
}

export default Item;
