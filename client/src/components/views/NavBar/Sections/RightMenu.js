/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
const Upload = require('../../../../assets/images/upload.png');

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <div style={{display:"flex"}}>
        <div style={{display:"inline"}}>
          <a style={{color:"white",textDecoration:"none"}} href="/login">
          <h2 style={{color:"white",textDecoration:"none",margin:"1vw"}}>Signin</h2></a>
        </div>
        <div style={{display:"inline"}}>
          <a href="/register"><h2 style={{color:"white",textDecoration:"none",margin:"1vw"}}>Signup</h2></a>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div>
          <a style={{color:"white",textDecoration:"none"}} onClick={logoutHandler}>
          <h2 style={{color:"white",textDecoration:"none",margin:"1vw"}}>Logout</h2></a>
        </div>
      </div>
    )
  }
}

export default withRouter(RightMenu);
