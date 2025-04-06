import { useContext, useEffect, useState } from 'react'
import { Movie } from '../types'
import { moviesContext } from '../context/MoviesContext'
import MovieComponent from './MovieComponent'

interface Props {
    displayCount?: number
}

export default function TopRated({ displayCount = 3 }: Props) {
    const { movies } = useContext(moviesContext)
    const [topRated, setTopRated] = useState<Movie[]>([])

    function selectTopRated() {
        movies?.sort((a: Movie, b: Movie): any => {
            return parseInt(b.rating) - parseInt(a.rating)
        })

        setTopRated((movies as Movie[]).slice(0, 3))
    }

    useEffect(() => {
        selectTopRated()
    }, [])


    return (
        <div className='flex flex-row gap-16 p-16 justify-around items-center w-full h-1/2'>
            {
                topRated.length > 0 &&
                topRated.map((movie, index) => {
                    return (
                        <MovieComponent index={index} movie={movie} key={index} />
                    )
                })
            }
        </div>
    )
}