import React from 'react';
import Header from './Header';
import Generate from './Generate';
import Options from './Options';
import AddOption from './AddOption';

export default class Content extends React.Component {

  state = {
    options: [],
    selectedOption: 'Nothing yet.',
  };

  componentDidMount() {
    // To complete later (localStorage etc)
  }

  componentDidUpdate(prevState, prevProps) {
    // To complete later (localStorage etc)
  }

  componentWillUnmount() {
    // To complete later (localStorage etc)
  }

  resetOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  addOption = (option) => {
    if (option && !this.state.options.includes(option)) {
      this.setState((prevState) => ({ options: prevState.options.concat(option), selectedOption: 'Add some more stuff!'}));
    } else if (this.state.options.includes(option)) {
      this.setState(() => ({ selectedOption: 'No duplicates please!' }));
    }
  };

  deleteOption = (option) => {
    this.setState((prevState) => ({ options: prevState.options.filter(item => item !== option) }));
  };

  clearGenerated = () => {
    this.setState(() => ({selectedOption: "Nothing yet."}));
  };

  generate = () => {
    const num = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({ selectedOption: this.state.options[num] }));
  };

  render() {
    return (
      <div className="content">
        <Header />
        <Options options={this.state.options} resetOptions={this.resetOptions} deleteOption={this.deleteOption} />
        <AddOption options={this.state.options} addOption={this.addOption} />
        <h1 className="selection">{this.state.selectedOption}</h1>
        <Generate hasOptions={this.state.options.length > 0} generate={this.generate} />
      </div>
    );
  }
}