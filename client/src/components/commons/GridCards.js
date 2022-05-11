import React from 'react'
import { Card, Avatar, Col, Typography, Row } from 'antd';
import { IMAGE_BASE_URL } from '../Config';

function GridCards(props) {

    let { actor, key, image, movieId, actorDetails, setActorDetails, actorId, movieName, characterName } = props
    const POSTER_SIZE = "w154";
    console.log("actor details",actor)

    if (actor) {
        return (

            <Col key={key} lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                <a href={`/actor/${actorId}`} >
                    <div style={{zIndex:"100",
                    position:"absolute",
                    paddingTop:"1vh",
                    paddingBottom:"1vh",
                    paddingLeft:"1vw",
                    paddingRight:"1vw",
                    margin:"1vw",
                    borderRadius:"10px",
                    background:"white",
                    top:"33vh",
                    width:"auto"}}>
                    <h3>{actor.name}</h3>
                    </div>
                    <img style={{ width: '100%', height: '320px' }} alt={characterName} src={`${IMAGE_BASE_URL}${POSTER_SIZE}${image}`} />
                    </a>
                </div>
            </Col>
        )
    } else {
        return (
            <Col key={key} lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    <a href={`/movie/${movieId}`} >
                        <img style={{ width: '100%', height: '320px' }} alt={movieName} src={image} />
                    </a>
                </div>
            </Col>
        )
    }

}

export default GridCards
