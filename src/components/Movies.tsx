import React, { useContext } from 'react'
import { moviesContext } from '../context/MoviesContext'
import { Movie } from '../types'
import MovieComponent from './MovieComponent'

type Props = {}

export default function Movies({ }: Props) {

    const movies = useContext(moviesContext)

    function randomize(): Movie[] {
        const temp = JSON.parse(JSON.stringify(movies.movies))
        const randomized: Movie[] = []

        for (let index = 0; index < 5; index++) {
            const random = Math.floor(Math.random() * temp.length)
            randomized.push(temp[random])
            temp?.splice(random, 1)
        }

        return randomized
    }

    return (
        <div className='flex flex-col gap-6 justify-center items-center'>
            {
                randomize().map((movie, index) => <MovieComponent index={index} movie={movie} key={index} />)
            }
        </div>
    )
}