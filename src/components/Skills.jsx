
import React from 'react'

function Skills() {
    const mySkills = [
    { id: 1, image: "https://img.icons8.com/?size=48&id=20909&format=png" },
    { id: 2, image: "https://img.icons8.com/?size=48&id=21278&format=png" },
    { id: 3, image: "https://cdn-icons-png.flaticon.com/128/1199/1199124.png" },
    { id: 4, image: "https://img.icons8.com/?size=80&id=wPohyHO_qO1a&format=png" },
    { id: 5, image: "https://img.icons8.com/?size=48&id=x7XMNGh2vdqA&format=png" },
    { id: 6, image: "https://img.icons8.com/?size=48&id=jD-fJzVguBmw&format=png" },
    { id: 7, image: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-64.png" },
    { id: 8, image: "https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-64.png" },
    
]
    return (
        <div className='p-10 pb-0 flex flex-col items-center'>
            <h1 className=' font-bold text-xl text-gray-400 text-center underline underline-offset-4'>My Skills</h1>
            <div className='flex flex-wrap items-center justify-center gap-5 mt-7 border-b border-gray-400 p-5'>
                {
                    mySkills.map(skill => {
                        return (
                            <div key={skill.id} className='w-20 h-20 sm:w-32 sm:h-32 bg-white bg-opacity-55 p-2 rounded-md'>
                                <img src={skill.image} className='w-full h-full' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
  )
}

export default Skills
