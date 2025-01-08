import starbooks from "../images/starbooks.png";
import weatherapp from "../images/weatherapp.jpg";
import blogpulse from "../images/blogpulse.png";
import urlShortner from "../images/urlShortner.jpeg";
import chatSphere from "../images/chatSphere.png";
const projects = [
	{
		title: "Blog",
		subtitle: "Pulse",
		image: blogpulse,
		url: "https://blogpulse-iyt9.onrender.com/",
		descripion:
			"BlogPulse is a dynamic blog platform built using the MERN stack (MongoDB, Express.js, React, and Node.js) and Flowbite for UI components. It lets users like, comment, search for posts, and manage their profiles. The site also includes a dark/light mode toggle for a better user experience. An admin panel allows admins to easily create, edit, or delete posts. The platform is designed to be responsive, meaning it works well on all devices.",
	},
	{
		title: "Star",
		subtitle: "Books",
		image: starbooks,
		url: "https://creative-faun-9f1d5a.netlify.app/",
		descripion:
			"StarBooks is a online bookstore website featuring cutting-edge technologies such as ReactJS with Vite, Tailwind CSS, React Router, and Redux Toolkit. Key features include dynamic routing, asynchronous API calls for book data, responsive design, efficient search functionality, detailed book information, cart management, seamless checkout via the Google Play Store, and indicators for online-offline mode switching. ",
	},
	{
		title: "URL",
		subtitle: "Shortner",
		image: urlShortner,
		url: "https://url-shortner-f642.onrender.com/",
		descripion:
			"The URL Shortener Website is a simple and efficient platform for managing and sharing links. Users can organize all their URLs in one place and generate short, shareable links with ease. Built with Express.js for the backend, MongoDB for the database, and EJS for server-side rendering, this project emphasizes simplicity, functionality, and efficient link management.",
	},
	{
		title: "Chat",
		subtitle: "Sphere",
		image: chatSphere,
		descripion:
			"ChatSphere is a real-time messaging application built with the MERN stack, designed to provide a secure and user-friendly communication experience. It features secure login, online status indicators, and a user search function, ensuring seamless connectivity and effortless interaction. Optimized for all devices.",
	},
	{
		title: "weather",
		subtitle: "App",
		image: weatherapp,
		url: "https://classy-crisp-440ebb.netlify.app/",
		descripion:
			"This Weather report apps include a search feature that allows users to input the name or location of a place they're interested in. Once a location is entered, the app retrieves and displays current weather conditions",
	},
];
export default projects;
