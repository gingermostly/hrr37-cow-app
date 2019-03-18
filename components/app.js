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
  }
  componentDidMount() {
    fetch('http://localhost:3000/cows')
      .then(res => res.json())
      .then(data => this.setState({ cowData: data.cows }))
  }

  render() {
    return (
      <div>
        <Form />
        <CowList cows={this.state.cowData} />
      </div>
    )
  }
}

export default App;

