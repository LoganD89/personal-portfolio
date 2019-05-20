import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingPage';
import AboutMe from './about-me';
import Contact from './contact';
import Project from './projects';
import Resume from './resume';


const Main = () => (
    <Switch>
        <Route exact path="/landingPage" component={LandingPage} />
        <Route exact path="/about-me" component={AboutMe} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
    </Switch>
)

export default Main;