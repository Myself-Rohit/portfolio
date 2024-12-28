import React, { useRef } from "react";
import { number, object, string } from "yup";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

function Contact() {
	const ref = useRef();

	const sendMail = (e) => {
		e.preventDefault();
		emailjs.sendForm(
			"service_gcjmqdv",
			"template_iojxl7h",
			ref.current,
			"Gt2EtZ14Nvzj4naAr"
		);
	};

	let validationSchema = object({
		name: string().required(),
		email: string().email().required(),
		number: number()
			.min(1000000000, "number contains less than 10 digits")
			.max(999999999999, "not a valid number")
			.required(),
		message: string().required(),
	});

	const initialValues = {
		name: "",
		number: "",
		email: "",
		message: "",
	};

	const { handleChange, handleBlur, values, errors, touched, isValid } =
		useFormik({
			initialValues,
			validationSchema,
		});
	return (
		<div
			id="contact"
			className="py-10 bg-gradient-to-r from-black to-slate-900"
		>
			<h1 className="text-white text-4xl font-bold text-center">
				Contact<span className="text-cyan-600">Me</span>
			</h1>
			<div className="flex flex-col p-4 sm:flex-row flex-wrap sm:gap-10 shrink-0 sm:items-start items-center justify-center text-white mx-auto mt-10 ">
				<div className="flex flex-col gap-y-5">
					<div className="flex flex-col items-start">
						<label>Name:</label>
						<div className="px-2 py-1 w-80 border border-cyan-600 rounded-md bg-slate-600 bg-opacity-55 text-sm text-gray-400 flex items-center">
							<img
								className="w-6 h-6 mr-7"
								src="https://cdn3.iconfinder.com/data/icons/basic-ui-elements-2-3-black-fill-zip/512/Basic_UI_Elements_-_2.3_-_Black_Fill-18-64.png"
							/>
							Rohit Negi
						</div>
					</div>
					<div className="flex flex-col items-start">
						<label>Email:</label>
						<div className="px-2 py-1 w-80 border border-cyan-600 rounded-md bg-slate-600 bg-opacity-55 text-sm text-gray-400 flex items-center">
							<img
								className="w-6 h-6 mr-7"
								src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/mail_email_inbox_message-2-64.png"
							/>
							rohitnegi263139@gmail.com
						</div>
					</div>
					<div className="flex flex-col items-start">
						<label>Phone No:</label>
						<div className="px-2 py-1 w-80 border border-cyan-600 rounded-md bg-slate-600 bg-opacity-55 text-sm text-gray-400 flex items-center">
							<img
								className="w-6 h-6 mr-7"
								src="https://cdn0.iconfinder.com/data/icons/media-and-communication-3/64/communication-telephone-phone-call-64.png"
							/>
							7302270537
						</div>
					</div>
				</div>

				<div className="bg-gradient-to-r from-slate-600 to-cyan-600 rounded mt-10 sm:mt-0 max-w-96">
					<form ref={ref} onSubmit={sendMail}>
						<div className="flex flex-col gap-y-5 bg-slate-600 p-5 rounded rounded-br-3xl ">
							<div className="flex flex-col items-start">
								<label>Your Name:</label>
								<input
									name="name"
									type="text"
									onChange={handleChange}
									onBlur={handleBlur}
									touched={touched.name}
									value={values.name}
									className="px-2 py-1 w-72 text-sm font-semibold focus:border-white text-black focus:outline-none border-b border-cyan-600 bg-transparent rounded-r-xl"
								/>
								{touched.name && errors.name && (
									<span className="text-red-400 flex flex-wrap font-semibold text-sm">
										{errors.name}
									</span>
								)}
							</div>
							<div className="flex flex-col items-start">
								<label>Your Email:</label>
								<input
									name="email"
									type="email"
									onChange={handleChange}
									onBlur={handleBlur}
									touched={touched.email}
									value={values.email}
									className="px-2 py-1 w-72 text-sm font-semibold focus:border-white text-black focus:outline-none border-b border-cyan-600 bg-transparent rounded-r-xl"
								/>
								{touched.email && errors.email && (
									<span className="text-red-400 flex flex-wrap font-semibold text-sm">
										{errors.email}
									</span>
								)}
							</div>
							<div className="flex flex-col items-start">
								<label>Your Phone No:</label>
								<input
									name="number"
									value={values.number}
									type="phone"
									onChange={handleChange}
									onBlur={handleBlur}
									touched={touched.number}
									className="px-2 py-1 w-72 text-sm font-semibold focus:border-white text-black focus:outline-none border-b border-cyan-600 bg-transparent rounded-r-xl"
								/>
								{touched.number && errors.number && (
									<span className="text-red-400 flex flex-wrap font-semibold text-sm">
										{errors.number}
									</span>
								)}
							</div>
							<div className="flex flex-col items-start">
								<label>Your Message:</label>
								<textarea
									name="message"
									type="text"
									onChange={handleChange}
									onBlur={handleBlur}
									touched={touched.message}
									value={values.message}
									className="px-2 py-1 w-72 text-sm font-semibold focus:border-white text-black focus:outline-none border-b border-cyan-600 bg-transparent rounded-r-xl"
								/>
								{touched.message && errors.message && (
									<span className="text-red-400 flex flex-wrap font-semibold text-sm">
										{errors.message}
									</span>
								)}
							</div>
						</div>
						<button
							type="submit"
							disabled={
								!isValid || Object.values(errors) != "" || values.name === ""
							}
							className={`w-full active:bg-cyan-600 duration-200  bg-gradient-to-l from-cyan-600 to-cyan-900 font-medium text-gray-300 px-7 py-2 rounded-tl-3xl rounded text-center disabled:hover:bg-gradient-to-l hover:bg-gradient-to-bl disabled:cursor-not-allowed disabled:active:scale-100 active:scale-x-75 `}
						>
							send
						</button>
					</form>
				</div>
			</div>
			<div className="flex space-x-5 justify-center mt-10">
				<a href="https://github.com/Myself-Rohit" target="_blank">
					<img
						className="w-8 h-8 object-cover hover:scale-125 duration-300"
						src="https://img.icons8.com/nolan/2x/github.png"
					/>
				</a>

				<a
					href="https://www.linkedin.com/in/rohit-negi-719b8323b/"
					target="_blank"
				>
					<img
						className="w-8 h-8 object-cover hover:scale-125 duration-300"
						src="https://img.icons8.com/nolan/2x/linkedin-circled.png"
					/>
				</a>

				<a href="https://wa.me/917302270537" target="_blank">
					<img
						className="w-8 h-8 object-cover hover:scale-125 duration-300"
						src="https://img.icons8.com/?size=100&id=43677&format=png&color=000000"
					/>
				</a>

				<a href="https://www.instagram.com/ro_hit_78_" target="_blank">
					<img
						className="w-8 h-8 object-cover hover:scale-125 duration-300"
						src="https://img.icons8.com/nolan/2x/instagram-new.png"
					/>
				</a>

				<a href="https://www.twitter.com/MrRohit__" target="_blank">
					<img
						className="w-8 h-8 object-cover hover:scale-125 duration-300"
						src="https://img.icons8.com/nolan/2x/twitter.png"
					/>
				</a>
			</div>
		</div>
	);
}

export default Contact;
