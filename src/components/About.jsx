import React from "react";
import photoAbout from "../images/photoAbout.jpg";
import Skills from "./Skills";
import resume from "../assets/Resume.pdf";

function About() {
	return (
		<div
			id="about"
			className="flex flex-col items-center pt-10 sm:pt-5 bg-gradient-to-r from-black to-slate-900"
		>
			<div className="sm:mx-10">
				<h1 className="text-white text-4xl font-bold ">
					About<span className="text-cyan-600">Me</span>
				</h1>
				<div className="sm:flex ">
					<div className="flex flex-col justify-evenly bg-gradient-to-t from-slate-100 to-slate-500  p-4 sm:mr-4 rounded-2xl items-center ">
						<p className="max-w-screen-md shrink-0">
							Hello there! I am a aspiring web developer with a Bachelor's
							degree in Computer Applications, set to graduate in 2025. I have a
							solid foundation in HTML, CSS, Tailwind CSS, JavaScript, React,
							Node.js, Express.js and MongoDB, along with version control tools
							like Git and GitHub. I am eager to apply my skills in real-world
							scenarios I am eager to continuously expand my knowledge and dive
							deeper into modern web technologies. With a commitment to learning
							and innovation, I am excited about the opportunity to contribute
							to dynamic teams, collaborate with like-minded professionals, and
							bring fresh ideas to real-world projects.
						</p>
						<div className="flex items-start justify-around w-full text-gray-900">
							<div className="flex text-sm flex-col">
								<p className="font-bold px-2 rounded-sm py-1">
									Name{" "}
									<span className="text-xs font-medium ml-1">ROHIT NEGI</span>
								</p>
								<p className="font-bold px-2 rounded-sm w-full py-1">
									Age <span className="text-xs font-medium ml-1">22</span>
								</p>
								<p className="font-bold px-2 rounded-sm w-full py-1">
									Resume{" "}
									<a
										className="text-blue-500 font-normal ml-1"
										href={resume}
										target="_blank"
									>
										Veiw
									</a>
								</p>
							</div>
							<a href={resume} download="Rohit's Resume">
								<div
									className=" duration-300 bg-gradient-to-tl from-cyan-400 to-cyan-800 font-medium text-gray-300 hover:bg-gradient-to-br border border-cyan-700
             px-7 py-1 rounded-md inline-block"
								>
									Download Resume
								</div>
							</a>
						</div>
					</div>
					<div className="bg-cyan-600 h-80 relative lg:block hidden shrink-0">
						<img className="rotate-1 h-80 object-cover " src={photoAbout} />
					</div>
				</div>
			</div>
			<Skills />
		</div>
	);
}

export default About;
