import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  return (
    <div>

      <Link  to='/about'>About </Link>


      <p className=' font-bold text-yellow-700' onClick={() =>  navigate('/contact')}>Contact </p>
      <p className=' font-bold text-yellow-700'> OCEAN vibes</p>
      <p className=' font-bold text-yellow-700'> OCEAN vibes</p>
      <p className=' font-bold text-yellow-700'> OCEAN vibes</p>
      <p className=' font-bold text-yellow-700'> OCEAN vibes</p>
      <p className=' font-bold text-yellow-700'> OCEAN vibes</p>
      <p className=' font-bold text-yellow-700'> OCEAN vibes</p>

      <p>fieiifijssssssssssssssifnieie</p>
    </div>
  )
}

export default Home
