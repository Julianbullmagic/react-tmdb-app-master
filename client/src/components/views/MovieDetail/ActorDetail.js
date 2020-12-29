import React, { useEffect, useState } from 'react'
import { List, Avatar, Row, Col, Button } from 'antd';
import axios from 'axios';
import Comments from './Sections/Comments'
import LikeDislikes from './Sections/LikeDislikes';
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE } from '../../Config'
import GridCards from '../../commons/GridCards';
import MainImage from '../../views/LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';
import ActorInfo from './Sections/ActorInfo';
import Favorite from './Sections/Favorite';

function MovieDetailPage(props) {
  console.log("actor props")
  console.log(props.match.params.actorId)
console.log(props.match.params)
console.log(props)
const movieId = props.match.params.actorId
console.log(movieId)
    const [Movie, setMovie] = useState([])
    const [CommentLists, setCommentLists] = useState([])
    const [LoadingForMovie, setLoadingForMovie] = useState(true)
    const movieVariable = {
        movieId: movieId
    }

    useEffect(() => {

        let endpointForMovieInfo = `https://api.themoviedb.org/3/person/${movieId}?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US`


        console.log("endpointForMovieInfo")
        console.log(endpointForMovieInfo)
        fetchDetailInfo(endpointForMovieInfo)

        axios.post('/api/comment/getComments', movieVariable)
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    console.log('response.data.comments', response.data.comments)
                    setCommentLists(response.data.comments)
                } else {
                    alert('Failed to get comments Info')
                }
            })

    }, [])

    const fetchDetailInfo = (endpoint) => {

        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
              console.log("fetched actor info")
                console.log(result)
                setMovie(result)
                setLoadingForMovie(false)



            })
            .catch(error => console.error('Error:', error)
            )
    }

    const updateComment = (newComment) => {
        setCommentLists(CommentLists.concat(newComment))
    }

    return (
        <div>

            {!LoadingForMovie ?
                <MainImage
                    image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${Movie.profile_path}`}
                    title={Movie.name}
                    text={Movie.biography}
                />
                :
                <div>loading...</div>
            }

            {!LoadingForMovie ?
                <ActorInfo movie={Movie} />
                :
                <div>loading...</div>
            }



            <div style={{ width: '85%', margin: '1rem auto' }}>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Favorite movieInfo={Movie} actorId={movieId}  userFrom={localStorage.getItem('userId')} />
                </div>



                <br />
                {/* Actors Grid*/}

                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                </div>




                <br />

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <LikeDislikes video videoId={movieId} userId={localStorage.getItem('userId')} />
                </div>

                {/* Comments */}
                <Comments movieTitle={Movie.name} CommentLists={CommentLists} postId={movieId} refreshFunction={updateComment} />

            </div>

        </div>
    )
}

export default MovieDetailPage
