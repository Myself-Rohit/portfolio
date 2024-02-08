import React from 'react'
import projects from './projectData.js'

function Projects() {
  
  return (
    <div id='projects' className='h-screen p-10 sm:pb-0 text-white bg-gradient-to-r from-slate-900 to-black'>
      <h1 className="text-white text-4xl font-bold text-center">
          My<span className="text-cyan-600">Projects</span>
        </h1>
      <div className='flex mx-auto mt-10 gap-x-2 max-w-[90%] overflow-auto relative snap-mandatory snap-x'>
        {
        projects.map(project => {
          return (
            <div key={project.id} className={`flex flex-col items-start justify-between w-full max-h-96 shrink-0 border border-cyan-300 shadow shadow-cyan-500 rounded-md p-3 scale-95 duration-300 snap-center `} >
              <div className='rounded-lg overflow-hidden'>
                <img src={project.image} alt='project image' className='h-40 hover:scale-105 duration-300'/>
              </div>
              <div className='mt-4 w-full'>
                <div className='flex items-end gap-x-5 '>
                  <h1 className='font-bold text-2xl text-cyan-500'>{project.title}</h1>
                  <a href={project.url} target='_blank' className='px-4 py-1 cursor-pointer bg-cyan-500 hover:bg-cyan-700 active:scale-95  rounded'>view</a>
                </div>
                <p className='text-gray-400 mt-5'>{project.descripion}</p>
              </div>
              <span className='grow'></span>
              
            </div>
            
          )
        })
        }
      
      </div>
      
    </div>
  )
}

export default Projects