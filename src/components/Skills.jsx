import React from "react";

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
	];
	return (
		<div className="p-10 pb-0 flex flex-col items-center">
			<h1 className=" font-bold text-4xl text-gray-400 text-center p-4 rounded-xl shadow-md shadow-cyan-600 border border-cyan-400">
				My Skills
			</h1>
			<div className="flex flex-wrap items-center justify-center gap-5 mt-7 py-5">
				{mySkills.map((skill) => {
					return (
						<div
							key={skill.id}
							title={skill.title}
							className="w-20 h-20 sm:w-28 sm:h-28 border-b-2 hover:border-black hover:scale-95 border-cyan-600 p-3 rounded-full"
						>
							<img src={skill.image} className="w-full h-full" />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Skills;
