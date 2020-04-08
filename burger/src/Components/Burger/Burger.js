import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styled from "styled-components";

const Burger = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  @media (min-width: 1000px) and(min-height:700px) {
    width: 700px;
    height: 600px;
  }
  @media (min-width: 500px) and(min-height:401px) {
    width: 450px;
    height: 400px;
  }
  @media (min-width: 500px) and(min-height:400px) {
    width: 350px;
    height: 300px;
  }
`;
const burger = props => {
  let transformedIngredient=Object.keys(props.ingredients).map(igkey=>{
    return[...Array(props.ingredients[igkey])].map((_,i)=>{
       return <BurgerIngredient key={igkey + i} type={igkey}/>
    })
  }).reduce((arr,el)=>{
    return arr.concat(el)
  },[])
  if(transformedIngredient.length===0)
  {
    transformedIngredient=<p>Please Start adding some ingredients</p>
  }
  return (
    <Burger>
      <BurgerIngredient type="bread-top" />
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </Burger>
  );
};
export default burger;
