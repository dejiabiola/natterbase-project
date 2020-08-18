import React, { Component } from 'react';
import './content.scss';
import Tabs from '../tabs/Tabs';

class Content extends Component {
  render() {
    return (
      <div className="container-fluid main">
        <main className="content">
        <Tabs />
        </main>
      </div>
    );
  }
}

export default Content;