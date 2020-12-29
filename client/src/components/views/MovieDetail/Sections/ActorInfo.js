import React from 'react'
import { Descriptions, Badge } from 'antd';

function ActorInfo(props) {

    const  {movie}  = props;
  

    return (
        <Descriptions title="Actor Info" bordered>
        <Descriptions.Item label="Title">{movie.name}</Descriptions.Item>
        <Descriptions.Item label="biography">{movie.biography}</Descriptions.Item>
        <Descriptions.Item label="birthday">{movie.birthday}</Descriptions.Item>
        <Descriptions.Item label="birthplace">{movie.place_of_birth}</Descriptions.Item>
        <Descriptions.Item label="popularity" span={2}>
        {movie.popularity}
        </Descriptions.Item>

      </Descriptions>
    )
}

export default ActorInfo
