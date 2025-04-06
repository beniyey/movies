import React, { useContext } from 'react'
import Movies from './Movies'
import { moviesContext } from '../context/MoviesContext'
import { Movie } from '../types'

type Props = {}

export default function Homepage({ }: Props) {

    const movies = useContext(moviesContext)

    return (
        <div className='flex flex-row justify-between p-4'>

            <div className='flex flex-col gap-6 p-6 justify-center items-center'>
                <p>movie title: {(movies.movies as Movie[])[(movies.mainMovie as number)].title}</p>
                <img src="https://picsum.photos/100/100" alt="" />
                <p>{(movies.movies as Movie[])[(movies.mainMovie as number)].description}</p>
            </div>

            <h1>this is the coolest deploy!!!</h1>

            <Movies />
        </div>
    )
}