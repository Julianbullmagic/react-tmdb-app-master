import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from 'antd';
import { useSelector } from 'react-redux';

function Favorite(props) {
    const user = useSelector(state => state.user)
    console.log("props")
console.log(props.movieInfo.id)
const id=props.movieInfo.id
const posterPath=props.movieInfo.poster_path
const profilePath=props.movieInfo.profile_path
const actorBio=props.movieInfo.biography
const name=props.movieInfo.name
const birthday=props.movieInfo.birthday
const placeOfBirth=props.movieInfo.place_of_birth
const popularity=props.movieInfo.popularity
const movieId = props.movieId
const userFrom = props.userFrom
const movieTitle = props.movieInfo.title
const moviePost = props.movieInfo.backdrop_path
const movieRunTime = props.movieInfo.runtime
console.log("props")
console.log(props)



    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)
    const variables = {
      id:id,
      profilePath:profilePath,
      posterPath:posterPath,
        movieId: movieId,
        userFrom: userFrom,
        movieTitle: movieTitle,
        moviePost: moviePost,
        movieRunTime: movieRunTime,
        actorBio:actorBio,
        name:name,
        birthday:birthday,
        placeOfBirth:placeOfBirth,
        popularity:popularity
    }
    console.log(variables)

    const onClickFavorite = () => {

        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }

        if (Favorited) {
            //when we are already subscribed
            axios.post('/api/favorite/removeFromFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteNumber(FavoriteNumber - 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Failed to Remove From Favorite')
                    }
                })

        } else {
            // when we are not subscribed yet

            axios.post('/api/favorite/addToFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteNumber(FavoriteNumber + 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Failed to Add To Favorite')
                    }
                })
        }
    }

    useEffect(() => {

        axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                if (response.data.success) {
                    setFavoriteNumber(response.data.subscribeNumber)
                } else {
                    alert('Failed to get Favorite Number')
                }
            })

        axios.post('/api/favorite/favorited', variables)
            .then(response => {
                if (response.data.success) {
                    setFavorited(response.data.subcribed)
                } else {
                    alert('Failed to get Favorite Information')
                }
            })

    }, [])


    return (
        <>
            <Button onClick={onClickFavorite} > {!Favorited ? "Add to Favorite" : "Not Favorite"} {FavoriteNumber}</Button>
        </>
    )
}

export default Favorite
