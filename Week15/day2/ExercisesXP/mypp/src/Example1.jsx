import React, { Component } from "react";

class Example1 extends Component {
  render() {
    const { socialMedias } = this.props;
    return (
      <div>
        <h2>Social Media Links:</h2>
        <ul>
          {socialMedias.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
