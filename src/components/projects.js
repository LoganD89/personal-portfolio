import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0){
      return(
        <div className="main">
          <div className="header">
            <h1>Fantasic Fries</h1>
            <p>This was my first website I did when I was getting ready to start at Bottega Tech</p>
          </div>
          <div className="image">
            <a href="https://gallant-davinci-20b4f3.netlify.com/">
              <img src="https://i.ibb.co/7KnSB5h/Devcamp-Fries.png" alt="fries" border="10" />
            </a>
          </div>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="main">
          <div className="header">
            <h1>Gaming Website</h1>
            <p>Group project</p>
          </div>
          <div className="image">
            <a href="https://cr-app-ina-day.herokuapp.com/">
              <img src="https://i.ibb.co/k81yxdY/Game-Website.png" alt="Game-Website" border="10" />
            </a>
          </div>
        </div>
      )
    } 
  }

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Fantasic Fries</Tab>
          <Tab>Gaming Website</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default Projects;





