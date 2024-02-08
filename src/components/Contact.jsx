import React from 'react'

function Contact() {
  return (
    <div id='contact' className='py-10 bg-gradient-to-r from-black to-slate-900'>
      <h1 className="text-white text-4xl font-bold text-center">
          Contact<span className="text-cyan-600">Me</span>
      </h1>
      <div className='flex flex-col p-4 sm:flex-row flex-wrap sm:gap-10 shrink-0 sm:items-start items-center justify-center text-white mx-auto mt-10 '>
        <div className='flex flex-col gap-y-5'>
          <div className='flex flex-col items-start'>
            <label>Name:</label>
            <div className='px-2 py-1 w-80 border border-cyan-600 rounded-md bg-slate-600 bg-opacity-55 text-sm text-gray-400 flex items-center'  >
              <img className='w-6 h-6 mr-7' src="https://cdn3.iconfinder.com/data/icons/basic-ui-elements-2-3-black-fill-zip/512/Basic_UI_Elements_-_2.3_-_Black_Fill-18-64.png" />
              Rohit Negi
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <label>Email:</label>
            <div className='px-2 py-1 w-80 border border-cyan-600 rounded-md bg-slate-600 bg-opacity-55 text-sm text-gray-400 flex items-center'  >
              <img className='w-6 h-6 mr-7' src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/mail_email_inbox_message-2-64.png" />
              rohitnegi263139@gmail.com
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <label>Phone No:</label>
            <div className='px-2 py-1 w-80 border border-cyan-600 rounded-md bg-slate-600 bg-opacity-55 text-sm text-gray-400 flex items-center'  >
              <img className='w-6 h-6 mr-7' src="https://cdn0.iconfinder.com/data/icons/media-and-communication-3/64/communication-telephone-phone-call-64.png" />
              7302270537
            </div>
          </div>
        </div>
      
        <div className='bg-gradient-to-r from-slate-600 to-cyan-600 rounded mt-10 sm:mt-0'>
          <form className='flex flex-col gap-y-5 bg-slate-600 p-5 rounded rounded-br-3xl '>
          <div className='flex flex-col items-start'>
            <label>Your Name:</label>
            <input className='px-2 py-1 w-72 text-sm font-semibold focus:border-white text-black focus:outline-none border-b border-cyan-600 bg-transparent rounded-r-xl' />
          </div>
          <div className='flex flex-col items-start'>
            <label>Your Email:</label>
            <input className='px-2 py-1 w-72 text-sm font-semibold focus:border-white text-black focus:outline-none border-b border-cyan-600 bg-transparent rounded-r-xl' />
          </div>
          <div className='flex flex-col items-start'>
            <label>Your Phone No:</label>
            <input className='px-2 py-1 w-72 text-sm font-semibold focus:border-white text-black focus:outline-none border-b border-cyan-600 bg-transparent rounded-r-xl' />
            </div>
            <div className='flex flex-col items-start'>
            <label>Your Message:</label>
            <textarea className='px-2 py-1 w-72 text-sm font-semibold focus:border-white text-black focus:outline-none border-b border-cyan-600 bg-transparent rounded-r-xl' />
            </div>
            
          </form>
          <button className="w-full active:bg-cyan-500 duration-200 bg-cyan-600 font-medium text-gray-300
             px-7 py-2 rounded-tl-3xl rounded text-center">
              send
            </button>
        </div>
      </div>
      <div className="flex space-x-5 justify-center mt-10">
        <a href="https://github.com/Myself-Rohit" target="_blank"><img className="w-7 h-7 object-cover hover:scale-125 duration-300" src="https://img.icons8.com/nolan/2x/github.png" /></a> 

        <a href="https://www.linkedin.com" target="_blank"><img className="w-7 h-7 object-cover hover:scale-125 duration-300" src="https://img.icons8.com/nolan/2x/linkedin-circled.png" /></a>

        <a href="https://www.facebook.com/profile.php?id=100025210593910" target="_blank"><img className="w-7 h-7 object-cover hover:scale-125 duration-300" src="https://img.icons8.com/nolan/2x/facebook-new.png" /></a>

        <a href="https://www.instagram.com/ro_hit_78_" target="_blank"><img className="w-7 h-7 object-cover hover:scale-125 duration-300" src="https://img.icons8.com/nolan/2x/instagram-new.png" /></a>

        <a href="https://www.twitter.com/MrRohit__" target="_blank"><img className="w-7 h-7 object-cover hover:scale-125 duration-300" src="https://img.icons8.com/nolan/2x/twitter.png" /></a>
      </div>
      
    </div>
  )
}

export default Contact