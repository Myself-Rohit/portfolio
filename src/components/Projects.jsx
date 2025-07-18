import projects from "./projectData.js";
import "../App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    gsap.from(".title", {
      opacity: 0,
      xPercent: -100,
      ease: "expo.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".title",
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
      },
    });
    gsap.from(".project", {
      opacity: 0,
      xPercent: 100,
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".project",
        start: "top 70%",
        end: "top 30%",
        scrub: 1,
      },
    });
  });
  return (
    <div
      id="projects"
      className="h-screen p-10 sm:pb-0 text-white bg-gradient-to-r from-slate-900 to-black"
    >
      <h1 className="title text-white text-4xl font-bold text-center">
        My<span className=" text-cyan-600">Projects</span>
      </h1>
      <div className="h-96 flex flex-wrap gap-3 mt-10 pr-1 overflow-y-scroll scrollbar">
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              className="project border border-cyan-600 rounded-md p-2 sm:p-4 flex flex-col items-center gap-y-5 mt-2 "
            >
              <h1 className="text-3xl font-bold text-gray-400">
                {project.title}
                <span className="text-gray-100">{project.subtitle}</span>
              </h1>
              <a
                href={project.url}
                target="_blank"
                className="max-w-64 max-h-64 rounded overflow-hidden shadow-sm shadow-cyan-500"
              >
                <img
                  src={project.image}
                  className="w-full h-full hover:scale-110 duration-300 hover:opacity-70"
                />
              </a>

              <div className="flex items-center max-w-4xl gap-5 text-gray-400">
                <a
                  className="text-blue-500 hover:bg-gradient-to-tl rounded-md px-5 py-1"
                  href={project.source}
                  target="_blank"
                >
                  Source Code
                </a>
                <a
                  href={project.url}
                  target="_blank"
                  className="bg-gradient-to-br from-cyan-800 to-cyan-400 hover:bg-gradient-to-tl rounded-md px-5 py-1 text-white font-semibold duration-500"
                >
                  Demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
