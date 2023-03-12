import React from "react";
import PageHeading from "../components/PageHeading";
import Project from "../components/Project";
import projects from "../projects.json";

function ProjectsScreen() {
  return (
    <div className="w-2/3 mx-auto mt-20 fadein">
      <PageHeading title="Projects" />
      <div className="mx-auto justify-center fadein">
        {projects.data.map((project) => (
          <div>
            <Project {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsScreen;
