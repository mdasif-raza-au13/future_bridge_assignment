import React, { useState } from 'react'
import MovieList from './MovieList'

const Header = () => {

    const [movieName, setMovieName] = useState("")
    console.log(movieName)

    return (
        <>
            <div className="bg-secondary text-white d-flex flex-row">
                <h2 className="my-2">Movie Cards Project</h2>
                <input type="text" className="form-control ml-4 my-2" id="moviename" name="moviename" placeholder="Enter Movie Name" onChange={(e) => setMovieName(e.target.value)} value={movieName} />
            </div>
            <MovieList movieName={movieName} />
        </>
    )
}

export default Header
