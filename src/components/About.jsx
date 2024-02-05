import React from 'react'
import { Link } from 'react-scroll'
import photoAbout from '../images/photoAbout.jpg'
import Skills from './Skills'

function About() {
  return (
    <div id="about" className="flex flex-col items-centerpt-10 sm:pt-5" >
      <div className="sm:mx-10">
        <h1 className="text-white text-4xl font-bold ">
          About<span className="text-cyan-600">Me</span>
        </h1>
        <div className="sm:flex ">
          <div className="flex flex-col justify-evenly bg-gray-300 border-2 border-cyan-600 p-4 sm:mr-4 rounded-2xl items-center ">
            <p className="max-w-screen-md shrink-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae tenetur ipsa repellendus laudantium voluptatibus temporibus ullam alias! Doloribus numquam unde sint enim corporis commodi voluptates aut assumenda cumque maiores.
              <Link className="text-cyan-600 font-semibold cursor-pointer" smooth duration={800} to="projects"> project</Link> section.
            </p>
            <div className="flex items-start justify-around w-full">
              <div className="flex text-sm flex-col">
                <p className="font-bold px-2 rounded-sm py-1">Name <span className="text-xs font-medium ml-1">ROHIT NEGI</span></p>
                <p className="font-bold px-2 rounded-sm w-full py-1">Age <span className="text-xs font-medium ml-1">21</span></p>
                <p className="font-bold px-2 rounded-sm w-full py-1">Resume <a className="text-blue-500 font-normal ml-1" href={""} target="_blank">Veiw</a></p>
              </div>
              <a href="" download="Rohit's Resume">
                <div className="hover:scale-110 duration-300 bg-cyan-600 border-cyan-900 border hover:bg-blue-500 font-medium text-gray-300
             px-7 py-1 rounded-md inline-block">
                  Download
                </div></a>
            </div>
          </div>
          <div className="bg-cyan-600 h-80 relative lg:block hidden shrink-0">
            <img className="rotate-1 h-80 object-cover " src={photoAbout} />
          </div>
        </div>
      </div>
      <Skills/>
    </div>
  )
}

export default About
