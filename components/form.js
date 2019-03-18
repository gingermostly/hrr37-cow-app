import * as React from 'react';
import '../styles/form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOneVal: '',
      inputTwoVal: ''
    };

    this.formRef = React.createRef();

    this.handleInputOne = this.handleInputOne.bind(this);
    this.handleInputTwo = this.handleInputTwo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputOne(e) {
    this.setState({
      inputOneVal: e.target.value
    });
  }

  handleInputTwo(e) {
    this.setState({
      inputTwoVal: e.target.value
    });
  }

  handleSubmit(e) {
    // e.preventDefault();
    this.props.onSubmit(this.state.inputOneVal, this.state.inputTwoVal);
    // this.formRef.submit();
  }

  render() {
    return (
      <form action="http://127.0.0.1:3000/cows" method="post" ref={this.formRef}>
        <input type="text" name="name" placeholder="name" onInput={this.handleInputOne} />
        <input type="text" name="description" placeholder="description" onInput={this.handleInputTwo} />
        <button onClick={this.handleSubmit} type="submit">submit cow</button>
      </form>
    );
  }
}

export default Form;
