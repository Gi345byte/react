import React from "react";

export function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
export default Skills;