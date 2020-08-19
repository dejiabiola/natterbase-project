import React, { Component } from 'react';
import './content.scss';
import Tabs from '../tabs/Tabs';

// Main content component. Houses everything minus top and side nav
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