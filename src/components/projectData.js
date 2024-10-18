import starbooks from "../images/starbooks.png";
import weatherapp from "../images/weatherapp.jpg";
import blogpulse from "../images/blogpulse.png";
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
		title: "weather",
		subtitle: "App",
		image: weatherapp,
		url: "https://classy-crisp-440ebb.netlify.app/",
		descripion:
			"This Weather report apps include a search feature that allows users to input the name or location of a place they're interested in. Once a location is entered, the app retrieves and displays current weather conditions",
	},
];
export default projects;
