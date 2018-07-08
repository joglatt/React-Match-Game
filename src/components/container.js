import React, { Component } from "react";
import Header from "./header";
import Frame from "./frame";
const containerStyle={
  width: '100%',
  border:'1px solid black'

}
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
  }
  randomize() {
    for (let i = this.props.images.array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.props.images.array[i], this.props.images.array[j]] = [
        this.props.images.array[j],
        this.props.images.array[i]
      ];
    }
  }
  handleClick = e => {
    this.randomize();
    if (!this.props.images.clicked.includes(e.target.id)) {
      this.setState({ score: this.state.score + 1 });
      this.props.images.clicked.push(e.target.id);
    } else {
      this.randomize();
      this.props.images.clicked = [];
      this.setState({ score: 0 });
    }
  };

  render() {
    return (
      <div style={containerStyle}>
        <Header score={this.state.score} />
        <Frame handleClick={this.handleClick} images={this.props.images} />
      </div>
    );
  }
}

export default Container;
