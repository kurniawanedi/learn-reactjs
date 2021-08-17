import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: [],
    };
  }

  getUser = async () => {
    let response = await axios.get(
      'https://jsonplaceholder.typicode.com/users/1',
    );
    this.setState({
      user: response.data,
    });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    const user = this.state.user;
    return (
      <div>
        <div>my name is {user.name}</div>
        <div>my username is {user.username}</div>
      </div>
    );
  }
}

export default App;
