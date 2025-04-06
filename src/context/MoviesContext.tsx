import { ReactNode, createContext, useState } from "react"
import { Movie } from "../types"


export const moviesContext = createContext<{
    movies?: Movie[],
    setMovies?: Function,
    mainMovie?: number
}>({
    mainMovie: 0,
    movies: [
        {
            title: "Shadow of the Phoenix",
            description: "A lone warrior rises from the ashes to reclaim his kingdom.",
            imgUrl: "https://example.com/shadow-phoenix.jpg",
            rating: "8.2",
        },
        {
            title: "Galactic Drift",
            description: "A space crew embarks on a perilous mission beyond the known universe.",
            imgUrl: "https://example.com/galactic-drift.jpg",
            rating: "7.5",
        },
        {
            title: "Neon Nights",
            description: "A cyberpunk detective unravels a conspiracy in a futuristic metropolis.",
            imgUrl: "https://example.com/neon-nights.jpg",
            rating: "8.9",
        },
        {
            title: "Frozen Echoes",
            description: "A group of scientists uncover an ancient secret buried beneath the Arctic ice.",
            imgUrl: "https://example.com/frozen-echoes.jpg",
            rating: "7.8",
        },
        {
            title: "Echoes of the Abyss",
            description: "A deep-sea diver encounters an otherworldly presence in the ocean depths.",
            imgUrl: "https://example.com/echoes-abyss.jpg",
            rating: "8.4",
        },
        {
            title: "Chrono Nexus",
            description: "Time travelers battle to preserve history from a rogue faction.",
            imgUrl: "https://example.com/chrono-nexus.jpg",
            rating: "9.1",
        },
        {
            title: "Desert Mirage",
            description: "A lost traveler stumbles upon an illusionary city with dark secrets.",
            imgUrl: "https://example.com/desert-mirage.jpg",
            rating: "6.9",
        },
        {
            title: "Stormbreakers",
            description: "Elite pilots defend Earth from an impending alien invasion.",
            imgUrl: "https://example.com/stormbreakers.jpg",
            rating: "7.6",
        },
        {
            title: "Silent Code",
            description: "A hacker discovers an AI capable of rewriting reality itself.",
            imgUrl: "https://example.com/silent-code.jpg",
            rating: "8.7",
        },
        {
            title: "Inferno Rising",
            description: "A firefighter uncovers a supernatural force within an uncontrollable blaze.",
            imgUrl: "https://example.com/inferno-rising.jpg",
            rating: "7.3",
        },
    ]
})

export default function MoviesContext({ children }: { children: ReactNode }) {

    const [movies, setMovies] = useState()

    return (
        <moviesContext.Provider value={{ movies, setMovies }}>
            {children}
        </moviesContext.Provider>
    )
}