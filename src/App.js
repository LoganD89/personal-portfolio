import React, { Component } from 'react';
import '/Users/logandempsey/Desktop/capstone_project/src/components/styles/App.css';
import '/Users/logandempsey/Desktop/capstone_project/src/components/styles/resume.css';
import '/Users/logandempsey/Desktop/capstone_project/src/components/styles/about-me.css';
import '/Users/logandempsey/Desktop/capstone_project/src/components/styles/projects.css';
import '/Users/logandempsey/Desktop/capstone_project/src/components/styles/contact.css';
import '/Users/logandempsey/Desktop/capstone_project/src/components/styles/nav-bar.css';
import { Layout, Header, Footer, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="My Portfolio" scroll>
                    <Navigation>
                        <Link to="/landingPage">Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="about-me">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="My Portfolio">
                    <Navigation>
                        <Link to="/landingPage">Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="about-me">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;
