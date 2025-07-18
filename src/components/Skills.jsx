import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Skills() {
  const mySkills = [
    {
      id: 1,
      title: "HTML",
      image: "https://img.icons8.com/?size=48&id=20909&format=png",
    },
    {
      id: 2,
      title: "CSS",
      image: "https://img.icons8.com/?size=48&id=21278&format=png",
    },
    {
      id: 3,
      title: "JavaScript",
      image: "https://cdn-icons-png.flaticon.com/128/1199/1199124.png",
    },
    {
      id: 4,
      title: "ReactJs",
      image: "https://img.icons8.com/?size=80&id=wPohyHO_qO1a&format=png",
    },
    {
      id: 5,
      title: "Tailwind",
      image: "https://img.icons8.com/?size=48&id=x7XMNGh2vdqA&format=png",
    },
    {
      id: 6,
      title: "Redux",
      image: "https://img.icons8.com/?size=48&id=jD-fJzVguBmw&format=png",
    },
    {
      id: 7,
      title: "Git",
      image:
        "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-64.png",
    },
    {
      id: 8,
      title: "GitHub",
      image:
        "https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-64.png",
    },
    {
      id: 9,
      title: "NodeJs",
      image: "https://img.icons8.com/?size=48&id=54087&format=png",
    },
    {
      id: 10,
      title: "ExpressJs",
      image: "https://img.icons8.com/?size=48&id=SDVmtZ6VBGXt&format=png",
    },
    {
      id: 11,
      title: "MongoDB",
      image: "https://img.icons8.com/?size=48&id=bosfpvRzNOG8&format=png",
    },
  ];
  useGSAP(() => {
    gsap.from(".section", {
      opacity: 0,
      xPercent: -100,
      ease: "expo.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".section",
        start: "top 70%",
        end: "top 20%",
        scrub: 1,
      },
    });
    gsap.from(".card", {
      opacity: 0,
      xPercent: 100,
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".card",
        start: "top 70%",
        end: "top 30%",
        scrub: 1,
      },
    });
  });

  return (
    <div className="p-10 pb-0 flex flex-col items-center">
      <h1 className="section font-bold text-4xl text-gray-400 text-center p-4 rounded-xl shadow-md shadow-cyan-600 border border-cyan-400">
        My Skills
      </h1>
      <div className="cards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-7 py-5">
        {mySkills.map((skill) => {
          return (
            <div
              key={skill?.id}
              className="card bg-gray-800 text-white  shadow shadow-slate-900 flex items-center gap-2 px-2 py-1 rounded-md"
            >
              <div className="w-10 h-10 sm:w-16 sm:h-16 border-b-2 p-2 sm:p-3 rounded-r-full bg-gray-300 shadow-sm shadow-cyan-500 shrink-0">
                <img src={skill.image} className="w-full h-full" />
              </div>
              <p className="font-semibold">{skill.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
