import React, { Component } from 'react';


class Resume extends Component {
  render() {
    return(
      <div className="main">
        <div className="header">
          <h1>Resume</h1>
          <p>(Click image to view the full resume)</p>
        </div>
        <div className="image">
        <a href="https://ibb.co/LhH913h">
          <img src="https://i.ibb.co/3YQScnY/Screen-Shot-2019-05-15-at-4-13-50-PM.png" alt="Screen-Shot-2019-05-15-at-4-13-50-PM" border="0" />
          </a>
        </div>
      </div>
    )
  }
}

export default Resume;