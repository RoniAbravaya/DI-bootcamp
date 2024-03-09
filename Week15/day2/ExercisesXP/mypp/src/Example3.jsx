import React, { Component } from "react";

class Example3 extends Component {
  render() {
    const { experiences } = this.props;
    return (
      <div>
        <h2>Experiences:</h2>
        {experiences.map((experience, index) => (
          <div key={index}>
            <img src={experience.logo} alt={experience.companyName} />
            <h3>{experience.companyName}</h3>
            <ul>
              {experience.roles.map((role, idx) => (
                <li key={idx}>
                  <div>
                    <strong>Title:</strong> {role.title}
                  </div>
                  <div>
                    <strong>Description:</strong> {role.description}
                  </div>
                  <div>
                    <strong>Location:</strong> {role.location}
                  </div>
                  <div>
                    <strong>Start Date:</strong> {role.startDate}
                  </div>
                  <div>
                    <strong>End Date:</strong> {role.endDate}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
