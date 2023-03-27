import React from "react";

class UsLecceImg extends React.Component {
  render() {
    console.log(UsLecceImg.props);
    return (
      <img
        style={{
          boxShadow: "2px 2px 25px 1px black",
          border: "2px solid #454c5a",
          width: "300px",
          height: "300px",
          borderRadius: "20%",
        }}
        src={this.props.img}
        alt={this.props.alt}
      />
    );
  }
}

export default UsLecceImg;
