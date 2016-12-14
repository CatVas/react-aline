import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';


export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <Header />

          {this.props.children}

          <Footer />
        </div>
      </div>
    );
  }
}
