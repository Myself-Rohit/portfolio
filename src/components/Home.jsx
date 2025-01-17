import React from "react";
import { Link } from "react-scroll";
import photoHome from "../images/photoHome.jpg";

function Home() {
	return (
		<>
			<div
				id="home"
				className='flex flex-col sm:flex-row justify-center min-h-screen items-center bg-no-repeat bg-center bg-cover bg-[url("https://media.istockphoto.com/photos/product-showcase-with-spotlight-black-studio-room-background-use-as-picture-id1304681590?b=1&k=20&m=1304681590&s=170667a&w=0&h=UlTsdL4KIRPcxbhgOrsIoE0BNNE6KpgxVhRD3gz_fV0=")]'
			>
				<div className="shrink-0">
					<img
						src={photoHome}
						className="w-72 h-72 rounded-full object-fit object-left border-2 border-cyan-600"
					/>
				</div>

				<div className="sm:ml-4">
					<h1 className="text-white text-5xl font-bold">
						Hi
						<span className="text-cyan-600">!</span>
						<div>
							<span>
								I<span className="text-cyan-600">'</span>m
							</span>
							<span className="ml-2 text-cyan-500 ">RoHit</span>
						</div>
					</h1>

					<p className="text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white max-w-sm text-sm py-4 ">
						A passionate full stack web developer.
					</p>

					<Link smooth duration={800} to="contact">
						<div
							className="duration-300 bg-gradient-to-br from-cyan-400 to-cyan-800 font-medium text-gray-300 hover:bg-gradient-to-tl hover:scale-105 border border-cyan-700 cursor-pointer
             px-7 py-1 rounded-md inline-block"
						>
							Contact
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}
export default Home;
