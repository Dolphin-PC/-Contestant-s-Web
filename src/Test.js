import React, { Component } from 'react';
import DemoNavbar from './components/Navbars/DemoNavbar';

import { FirebaseApp, todosRef } from './config/firebase';

class Test extends React.Component {
  constructor() {
    super();

    this.app = FirebaseApp;
    this.database = FirebaseApp.database().ref().child('speed');

    this.state = {
      speed: 10,
    };
  }

  componentDidMount() {
    this.database.on('value', (snap) => {
      this.setState({
        speed: snap.val(),
      });
    });
  }

  render() {
    return <div>{this.state.speed}</div>;
  }
}

export default Test;
