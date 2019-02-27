import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './scss/style.scss'
import Navigation from './components/layout/Navigation'
import Dashboard from './components/dashboard/Dashboard'
import PostDetails from './components/posts/PostDetails'
import Form from './components/auth/Form'


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
              <Route path='/signin' component={Form} />
              <Route path='/signup' component={Form} />
              <Route path='/create' component={Form} />
            </Switch>
          </main>
        </div>
      </Router>

    );
  }
}

export default App;
