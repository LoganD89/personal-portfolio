import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox657fb44ec7954156b9fda34bb4af4789.mailgun.org";
const mg = mailgun({apiKey: "87caf812ecf6036a98cc34a7828b772d-52b0ea77-11dc4301", domain: DOMAIN});

const data = {
	from: "Mailgun Sandbox <postmaster@sandbox657fb44ec7954156b9fda34bb4af4789.mailgun.org>",
	to: "logandempsey199@gmail.com",
	subject: "Hello",
	text: "Testing some Mailgun awesomness!"
};





class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <div>
            <h2>Logan Dempsey</h2>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>If you are interested in me working for you or your company please feel free to reach out either via email or phone call.</p>
            </div>
          </Cell>

          <Cell col={6}>
          <div>
            <h2>Contact Me</h2>
              <button onClick={mg.messages().send(data, function (error, body) {
	console.log(body);
})} >submit</button>
            <hr/>

              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                      (801) 608-9245
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      logandempsey199@gmail.com
                    </ListItemContent>
                  </ListItem>
                </List>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;





      // <div className="contact-body">
      //   {/* <Grid className="contact-grid">

      //       <h2>Contact Me</h2>
      //       <hr/>
      //       <form action="mailto:LoganDempsey199@gmail.com" method="post" enctype="text/plain" className="card" >
      //         <label className="card__lable"></label>
      //         <input type="text" name="message" placeholder="Message" className="card__inputs" />
      //         <input type="submit" value="send" className="card__button"/>
      //       </form>


      //   </Grid>
      // </div> */}
