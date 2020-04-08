import React from'react'
import Aux from '../../hoc/Aux'
import Button from '../../UI/Button/Button'
const orderSummary =(props)=>{
    const ingredientSummary =Object.keys(props.ingredients).map(igKey=>{
        return(<li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
            </li>)
    })
   return(
       <Aux>
         <h3>Order</h3>
         <p>A delecious burger with following ingredients</p>
         <ul>
             {ingredientSummary}
         </ul>
   <p><strong>Total price:{props.price.toFixed(2)}</strong></p>
         <p>Continue to checkout?</p>
         <Button clicked={props.purchaseCancelled}>Cancel</Button>
         <Button clicked={props.purchaseContinued}>Continue</Button>
       </Aux>
   )
}
export default orderSummary