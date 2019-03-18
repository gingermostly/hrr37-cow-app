import * as React from 'react';
import Form from './form.js';
import CowList from './cowList.js';
import '../styles/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowData: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(valOne, valTwo) {
    this.setState({
      cowData: [...this.state.cowData, {name: valOne, description: valTwo}]
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} />
        <CowList cows={this.state.cowData} />
      </div>
    )
  }
}

export default App;

