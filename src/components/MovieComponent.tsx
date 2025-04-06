import React, { useEffect } from 'react'
import { Movie } from '../types'

type Props = {
    movie: Movie,
    index: number
}

export default function MovieComponent({ movie, index }: Props) {

    const test = index

    return (
        <div className='relative w-fit h-fit'>
            <p className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-black z-40'>{movie.title}</p>
            <img className='z-0' src="https://picsum.photos/100/100" alt="" />
        </div>
    )
}