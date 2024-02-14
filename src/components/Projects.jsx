import React from 'react'
import projects from './projectData.js'

function Projects() {
  
  return (
    <div id='projects' className='h-screen p-10 sm:pb-0 text-white bg-gradient-to-r from-slate-900 to-black'>
      <h1 className="text-white text-4xl font-bold text-center">
          My<span className="text-cyan-600">Projects</span>
        </h1>
      <div className='h-96 w-full mt-10 pr-1 overflow-y-scroll'>
        {
          projects.map(project => {
            return (
              <div key={project.title} className='border border-cyan-600 rounded-md p-2 sm:p-4 flex flex-col items-center gap-y-5 mt-2 '>
                <h1 className='text-3xl font-bold text-gray-400'>{project.title}<span className='text-gray-100'>{project.subtitle}</span></h1>
                <a href={project.url} target='_blank' className='max-w-64 max-h-64 rounded overflow-hidden shadow-sm shadow-cyan-500'>
                  <img  src={project.image} className='w-full h-full hover:scale-110 duration-300 hover:opacity-70' />
                </a>
                <div className='flex flex-col sm:flex-col-reverse items-center max-w-4xl gap-y-5 text-gray-400'>
                  <a href={project.url} target='_blank' className='bg-gradient-to-br from-cyan-800 to-cyan-400 hover:bg-gradient-to-tl rounded-md px-5 py-1 text-white font-semibold hover:scale-105'>view</a>
                  <p>{project.descripion}</p>
                </div>

              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default Projects