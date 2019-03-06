import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './scss/style.scss'
import Navigation from './components/layout/Navigation'
import Dashboard from './components/dashboard/Dashboard'
import PostDetails from './components/posts/PostDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreatePost from './components/posts/CreatePost'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <main>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/post/:id' component={PostDetails} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
              <Route path='/create' component={CreatePost} />
            </Switch>
          </main>
        </div>
      </Router>

    );
  }
}

export default App;
