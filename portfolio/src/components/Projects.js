import React from "react";

const projects = [
  { id: 1, title: "Weather App", description: "Built using React and OpenWeather API" },
  { id: 2, title: "To-Do App", description: "Simple to-do list using React hooks" },
];

export function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;