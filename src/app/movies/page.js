import React from 'react'
import Link from 'next/link'
import fetch from 'node-fetch'
import { resolve } from 'styled-jsx/css'

const movies = async () => {

  await new Promise(resolve => setTimeout(resolve, 3000));



  // const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '57ff3e7bd9msh1bf87ead5912a75p1607a9jsn8a1c39a2dec7',
  //     'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  //   }
  // };

  // try {
  //   const response = await fetch(url, options);
  //   const result = await response.json();
  //   console.log(result);
  // } catch (error) {
  //   console.error(error);
  // }



  return (
    <div className='flex flex-col justify-center items-center'>
      <span className='font-semibold'>Movies</span>
      <Link href={"/movies/asdsas"} className='p-2 rounded-md bg-blue-600'>Go to asdsas</Link>

    </div>
  )
}

export default movies