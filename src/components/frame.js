import React, { Component } from "react";
const imageStyle = {
  background: "lightgray",
  width: 275,
  height: 275,
  padding: 10,
  border: "5px solid black"
};
const frameStyle={
  margin: "auto",
  width: 850,

}

class Frame extends Component {
  render() {
    const { handleClick, images } = this.props;
    return (
      <div style={frameStyle}>
        {images.array.map(item => (
          <img
          className={"imageResponsive"}
            onClick={handleClick}
            style={imageStyle}
            src={item.src}
            alt={item.id}
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
    );
  }
}

export default Frame;
