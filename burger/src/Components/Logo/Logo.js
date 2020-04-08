import React from 'react'
import burgerLogo from '../../assets/images/burger.png'
import styled from 'styled-components'
const Logo=styled.div`
  background-color:white;
  padding:8px;
  height:100%;
  box-sizing:border-box;
  border-radius: 5px;
  position:absolute`
  const Img=styled.div`
    height:100%`
  
const logo=(props)=>(
    <Logo style={{height:props.height}}>
        <Img><img src={burgerLogo} alt="Myburger"/></Img>
    </Logo>
)
export default logo