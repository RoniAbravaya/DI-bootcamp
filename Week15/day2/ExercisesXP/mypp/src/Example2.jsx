import React, { Component } from "react";

class Example2 extends Component {
  render() {
    const { skills } = this.props;
    return (
      <div>
        <h2>Skills:</h2>
        {skills.map((skillSet, index) => (
          <div key={index}>
            <h3>{skillSet.Area}</h3>
            <ul>
              {skillSet.SkillSet.map((skill, idx) => (
                <li key={idx}>{skill.Name} {skill.Hot ? "(Hot)" : null}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
