import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="favorite">
        <a href="/favorite" style={{display:"inline-block"}
}>Favorite</a>
        <a href="/mostpopular" style={{display:"inline-block"}
}>Most Popular</a>

      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu
