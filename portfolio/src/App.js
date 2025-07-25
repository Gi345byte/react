import React, { Suspense, lazy } from "react";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

export function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Portfolio</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </Suspense>
    </div>
  );
}
export default App;