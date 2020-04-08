import React  from 'react'
import styled from "styled-components"
const BuildControl = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  margin: 5px 0;
  
`;
const Button=styled.div`
   display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;
  &:hover,&:disabled{
    background-color: #AC9980;
    color: #ccc;
    cursor: not-allowed;
  }`
const Label= styled.div`
padding: 10px;
    font-weight: bold;
    width: 80px;;
`;
const Less= styled.div`
background-color: #D39952;
    color: white;
    &:hover,&:active{
        background-color: #DAA972;
        color: white;
    }
`;
const More= styled.div`
background-color: #8F5E1E;
    color: white;
    &:hover,&:active{
        background-color: #99703F;
    color: white;
    }
`;
const buildControl =(props) =>(
    <BuildControl>
        <Label>{props.label}</Label>
        <Button onClick={props.removed} disabled={props.disabled}><Less>Less</Less></Button>
        <Button onClick={props.added}><More>More</More></Button>
    </BuildControl>
);
export default buildControl