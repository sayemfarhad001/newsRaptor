import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import apiKey from './newsapi-apikey';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'light'
    };
  }

  toggleMode = ()=>{
    if(this.state.mode === 'light'){
      this.setState({mode: 'dark'})
      document.body.style.backgroundColor = '#042743';
      // showAlert('Dark mode has been enabled!', 'success');
    } else {
      this.setState({mode: 'light'})
      document.body.style.backgroundColor = 'white';
      // showAlert('Light mode has been enabled!', 'success');
    }
  }

  pageSize = 5;

  render() {
    return (
      <>
        <Router>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} apiKey={apiKey} category="general" mode={this.state.mode}/>}/>
            <Route path="/business" element={<News key="business" pageSize={this.pageSize} apiKey={apiKey} category="business" mode={this.state.mode}/>}/>
            <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} apiKey={apiKey} category="entertainment" mode={this.state.mode}/>}/>
            <Route path="/health" element={<News key="health" pageSize={this.pageSize} apiKey={apiKey} category="health" mode={this.state.mode}/>}/>
            <Route path="/science" element={<News key="science" pageSize={this.pageSize} apiKey={apiKey} category="science" mode={this.state.mode}/>}/>
            <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} apiKey={apiKey} category="sports" mode={this.state.mode}/>}/>
            <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} apiKey={apiKey} category="technology" mode={this.state.mode}/>}/>
            <Route path="/about" element={<About mode={this.state.mode}/>}/> 
          </Routes> 
        </Router>
      </>      
    )
  }
}
