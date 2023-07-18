import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'


const Header = () => {
    return (
        <header className='flex justify-between bg-slate-600 p-1 text-white'>
            <Link href={"/"} className='ml-2'>
                <Image src={'/logo.png'} width={150} height={150} alt='social parivartan'></Image>
            </Link>
            <Nav />
        </header>
    )
}

export default Header