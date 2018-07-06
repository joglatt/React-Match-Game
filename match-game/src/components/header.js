import React, { Component } from 'react';
const conStyle={
    textAlign:"center"
    
  }
class Header extends Component {
 
    render() {
        return (
            <div style={conStyle}>
                <h1>Click a Square to begin</h1>
                <div>Score:{this.props.score}</div>
            </div>
        );
    }
}

export default Header;