import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOnline: true
    }

    this.handleOnline = this.handleOnline.bind(this)
    this.handleOffline = this.handleOffline.bind(this)
  }

  componentDidMount() {
    if (navigator && navigator.onLine) this.handleOnline(); else this.handleOffline()
    window.addEventListener('online', this.handleOnline)
    window.addEventListener('offline', this.handleOffline)
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnline)
    window.removeEventListener('offline', this.handleOffline)
  }

  handleOnline() {
    this.setState({ isOnline: true })
    console.log('Status: online');
  }

  handleOffline() {
    this.setState({ isOnline: false })
    console.log('Status: offline');
  }

  get contentOnline() {

    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1>You are online!</h1>
            <p>This site only working on offline, please turn off your network to continue</p>
          </div>
        </div>
        <div className="container">
          <p>Why is offline</p>
        </div>
        <footer className="fixed-bottom">
          <div className="container">
            <div className="text-muted">Sometime you do not have a good network or you just hate it on moment. Remember, you have me.</div>
          </div>
        </footer>
      </div>
    )
  }

  get contentOffline() {
    return (
      <Router>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }

  render() {
    return this.state.isOnline? this.contentOnline : this.contentOffline
  }

}

export default App;
