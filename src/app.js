import React from 'react';
import { connect } from 'react-redux';

const Header = () => {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
};

class Footer extends React.Component {
  render() {
    return <footer>&copy; 2018 Code Fellows</footer>;
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: 0,
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    this.setState({ stuff: Math.ceil(Math.random() * 99) });
  };

  render() {
    return (
      <div>
        <h4>{this.state.stuff} {this.state.stuff}</h4>
        <button onClick={this.handleButtonClick}>K7ic M3</button>
        <h4> </h4>
        <h4>{this.state.stuff} {this.state.stuff}</h4>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
