import React from 'react'
// import axios from 'axios'
import data from '../assest/data'

const MovieList = (props) => {

const list = data.filter((element) => element.title === props.movieName)
console.log(list)

    return (
        <>
            {!props.movieName ?
                <div className="m-4 d-sm-flex justify-content-around flex-wrap">
                    {data.map((element) =>
                        <div className="my-2 card" style={{ width: "18rem" }}>
                            <img src={element.poster_path} className="card-img-top" alt="pic" />
                            <div class="card-body">
                                <h5 class="card-title">{element.original_title}</h5>
                                <p class="card-text ">{element.overview}</p>
                                <b class="card-text">{element.vote_average} ⭐</b>
                            </div>
                        </div>)
                    }
                </div> : <div className="m-4 d-sm-flex justify-content-around flex-wrap">
                    {list.map((element) =>
                        <div className="my-2 card" style={{ width: "18rem" }}>
                            <img src={element.poster_path} className="card-img-top" alt="pic" />
                            <div class="card-body">
                                <h5 class="card-title">{element.original_title}</h5>
                                <p class="card-text ">{element.overview}</p>
                                <b class="card-text">{element.vote_average} ⭐ </b>
                            </div>
                        </div>)
                    }
                </div>
            }
        </>
    )
}

export default MovieList
