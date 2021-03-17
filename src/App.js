import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Email from './components/Email';
import File_Select from './components/fileSelect';

class App extends Component {
  state = {
		emailAddress: '',
	};
  render() {
    console.log(this.state.emailAddress)
    return (
      <div className="App">
        < File_Select />
        < Email updateInputs={this.updateInputs}/>
        < Button />
      </div>
    );
  }
  updateInputs = (event) => {
    this.setState({ emailAddress: event.target.value })
}
}

export default App;
