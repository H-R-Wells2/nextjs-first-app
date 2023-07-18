import React from 'react'
import Link from 'next/link'

const Nav = () => {
    return (
        <div className="flex justify-center gap-6 items-center mr-2">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/movies"}>Movies</Link>
            <Link href={"/login"}>Login</Link>
        </div>
    )
}

export default Nav