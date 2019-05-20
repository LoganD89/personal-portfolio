import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div className="container" style={{width: '100%', margin: 'auto'}}>
      
        <Grid className="landing-grid">
          <Cell col={12}>
 
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <h2>Logan Dempsey</h2>

            <hr/>

              <p>Javascript | ReactJS | Python 3 | HTML5 | CSS | Flask | Git | MongoDB | SQL Databases | SCSS/SASS | Flexbox | CSS Grid</p>

            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;