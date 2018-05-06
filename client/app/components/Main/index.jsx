import React, { Component } from "react"

import Header from 'components/Header';
import Footer from 'components/Footer';

export default class FaqPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id='main-page' className='page'>
          <Header />
            <div className="wrapper">
               Main page
          </div>
        <Footer />
      </div>
    )
  }
}
