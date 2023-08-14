import React from 'react'
import AvatarImage from '../assets/guyTrain.jpg'

const Hello = () => {
  return (
    <div name='home' className='h-screen w-full pt-20 justify-center items-center flex bg-gradient-to-b from-lighterGreen to-white'>
    
     <div className='md:flex-row md:flex md:items-center md:justify-center'>
        <div className='flex flex-col md:w-[600px] py-10 px-10 md:flex'>
            <p className='italic font-bold drop-shadow-md shadow-white'>Gym, Fitness and Yoga</p>
            <h1 className='font-bold text-6xl'>SHAPE YOURSELF</h1>
            <p className='pt-7 md:w-2/3'>"Build Your Best Shape: 
            Consistent gym workouts targeting strength and cardio.
            Combine proper form, balanced nutrition, and ample rest for optimal results."</p>
        </div>
     <div className=''>
        <img src={AvatarImage} className='w-2/3 mx-auto rounded-2xl md:w-full bg-black object-cover '/>
     </div>
    </div>
    </div>
  )
}

export default Hello