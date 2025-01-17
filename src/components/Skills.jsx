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
	return (
		<div className="p-10 pb-0 flex flex-col items-center">
			<h1 className=" font-bold text-4xl text-gray-400 text-center p-4 rounded-xl shadow-md shadow-cyan-600 border border-cyan-400">
				My Skills
			</h1>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-7 py-5">
				{mySkills.map((skill) => {
					return (
						<div className="bg-white flex items-center gap-2 px-2 py-1 rounded-md">
							<div
								key={skill.id}
								className="w-10 h-10 sm:w-20 sm:h-20 border-b-2 hover:border-black hover:scale-95 border-cyan-600 p-2 sm:p-3 rounded-full"
							>
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
