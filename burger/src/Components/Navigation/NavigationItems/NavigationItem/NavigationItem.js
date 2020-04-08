import React from 'react'
import styled from "styled-components"
const NavigationItem=styled.div`
 margin: 10px 0;
 box-sizing:border-box;
 display:block;
 width:100%;
 &:a{
     color:#8F5C2C;
     text-decoration:none;
     width:100%;
     box-sizing:border-box;
     display:block;
 }
 &a:hover&a:active&a.active{
    
     color:#40A4C8;
 }
 @media(min-width:500px)
 {
    margin:0;
    display:flex;
    height:100%;
    width:auto;
    align-items:center;
    &:a{
        color:white;
        text-decoration:none;
        height:100%;
        padding:16px 10px;
        border-bottom:4px solid transparent;
     
    }
    &a:hover&a:active&a.active{
        background-color:#8F5C2C;
     border-bottom:4px solid #40A4C8;
     color:white;
    }
 }`
const navigationItem=(props)=>(
 <NavigationItem>
     {/* className={props.active?classes.active:null}*/}
 <li><a href={props.link}>{props.children}</a></li>
 </NavigationItem>
)
export default navigationItem