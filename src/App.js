import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import List from './components/List';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddItem from './components/AddItem';
// import uuid from 'uuid';
import Axios from 'axios';

class App extends Component {
  state = {todos: []}

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => this.setState({todos: res.data}));
  }

  add = (title) => {
    if(title === '') return false;

    Axios.post('https://jsonplaceholder.typicode.com/todos', {title: title, completed: false})
      .then(res => this.setState({todos: [...this.state.todos, res.data]}));
    return true;
  }

  delete = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(item => item.id !== id)]}));
  }

  toggle = (id) => {
    this.setState({todos: this.state.todos.map(item => {
      if(item.id === id){
        item.completed = !item.completed;
      }
      return item;
    })});
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddItem add={this.add}/>
              <List list={this.state.todos} toggle={this.toggle} delete={this.delete}/>
            </React.Fragment>
          )}/>
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
