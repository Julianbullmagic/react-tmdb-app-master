import React from 'react'
import { Descriptions, Badge } from 'antd';

function MovieInfo(props) {

    const { movie } = props;
    let moviegenres=[]
    if(movie.genres){
      moviegenres=movie.genres.map(genre=><>{genre.name}, </>)
    }
    return (
      <>
        <h2>{movie.original_title}</h2>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <Descriptions title="Movie Info" bordered>
        <Descriptions.Item label="Title">{movie.original_title}</Descriptions.Item>
        <Descriptions.Item label="release_date">{movie.release_date}</Descriptions.Item>
        <Descriptions.Item label="revenue">{movie.revenue}</Descriptions.Item>
        <Descriptions.Item label="runtime">{movie.runtime}</Descriptions.Item>
        {movie.genres&&<Descriptions.Item label="genres">{moviegenres}</Descriptions.Item>}

        <Descriptions.Item label="vote_average" span={2}>
        {movie.vote_average}
        </Descriptions.Item>
        <Descriptions.Item label="vote_count">{movie.vote_count}</Descriptions.Item>
        <Descriptions.Item label="status">{movie.status}</Descriptions.Item>
        <Descriptions.Item label="popularity">{movie.popularity}</Descriptions.Item>
      </Descriptions>
      </>
    )
}

export default MovieInfo
