/**
 *Outlook of the App
*/
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from './actions';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const { value } = this.state;
    const { todos } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Todo App</h2>
        </div>
        <div className="App-intro">
          <div>   /**divison for adding value in todo*/
            <input
              onChange={e => this.setState({ value: e.target.value })}
              value={value}
            />
            <button
              onClick={() => {
                let { value } = this.state;
                this.props.addTodo({ text: value });
              }}
            >
              Add
            </button>
          </div>
          <div>/**Divison for deleting value from todo*/
            {todos.map((todo, i) => {
              return (
                <div key={i + 1}>
                  <div>{todo.text}</div>
                  <button onClick={() => this.props.deleteTodo({ id: i })}>delete</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
