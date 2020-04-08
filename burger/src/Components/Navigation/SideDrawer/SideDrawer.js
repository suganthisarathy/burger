import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import styled from "styled-components"
import BackDrop from "../../UI/Backdrop/Backdrop"
import Aux from "../../hoc/Aux"

const SideDrawer=styled.div`
  position:fixed;
  width:280px;
  max-width:70%;
  height:100%;
  left:0;
  top:0;
  z-index:200;
  background-color: white;
  padding:32px 16px;
  box-sizing:border-box;
  transition: transform 0.3s ease-out;
  @media(min-width: 500px){
      .SideDrawer{
          display:none;
      }
  }
  &::Open{
      transform:translateX(0)
  }
  &::Close{
      transform:translateX(-100%)
  }`

const sideDrawer=(props) =>{
    return(
        <Aux>
        <BackDrop show/>
        <SideDrawer>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>
        </SideDrawer>
        </Aux>
    );
}
export default sideDrawer