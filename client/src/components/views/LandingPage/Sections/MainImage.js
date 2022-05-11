import React from 'react'
import { Typography } from 'antd';

const { Title } = Typography;

function MainImage(props) {
  let height=props.actor?"100vh":"60vh"
    return (
        <div
            style={{
              padding:"3vw",
                background:
                    `linear-gradient(to bottom, rgba(0,0,0,0)
            39%,rgba(0,0,0,0)
            41%,rgba(0,0,0,0.65)
            100%),
            url('${props.image}'), #1c1c1c`,
                height: `${height}`,
                margin:"3vw",
                backgroundSize: '100%, cover',
                backgroundPosition: 'center, center',
                width: '94vw',
                position: 'relative'
            }}
        >

        </div>
    )
}

export default MainImage
