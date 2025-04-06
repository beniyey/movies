import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

export default function NavBar({ }: Props) {
    return (
        <nav className='flex flex-col gap-6 justify-center items-center'>
            <h1>Best Movies</h1>

            <div className='flex flex-row gap-6 justify-around px-6'>
                <Link className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:text-blue-600 hover:bg-white transition-all active:text-black' to={"/"}>Home</Link>
                <Link className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:text-blue-600 hover:bg-white transition-all active:text-black' to={"/search"}>Search</Link>
                <Link className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:text-blue-600 hover:bg-white transition-all active:text-black' to={"/add"}>Add</Link>
                <Link className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:text-blue-600 hover:bg-white transition-all active:text-black' to={"/delete"}>Delete</Link>
            </div>
        </nav>
    )
}