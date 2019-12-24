import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class AddItem extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ title: e.target.value });

  submit = (e) => {
    e.preventDefault();
    this.props.add(this.state.title);
    this.setState({title: ''});
  }

  render(){
    return (
      <form onSubmit={this.submit} style={{ display: 'flex'}}>
        <input
          type='text'
          name='title'
          placeholder='Add a new todo item.'
          value={this.state.title}
          style={{flex: 10, padding: '0 1em' }}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Add'
          className='add-btn'
          style={{flex: '1', padding: '0 1em' }}
        />
      </form>
    );
  }
}

export default AddItem;
