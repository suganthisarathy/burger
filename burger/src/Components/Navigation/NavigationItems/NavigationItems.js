import React from'react'
import styled from "styled-components"
import NavigationItem from "./NavigationItem/NavigationItem"
const NavigationItems=styled.div`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-flow:column;
align-items:center;
height:100%;
@media(min-width:500px){
  .NavigationItems{
    flex-flow:row;
  }
}`

const navigationItems =()=>(
    <NavigationItems>
    <ul>
      <NavigationItem link="/" active>Burger Builder</NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  </NavigationItems>
)

export default navigationItems