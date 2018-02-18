import React from 'react';

import styles from './OrderSummary.css';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey => {
    return (
      <li key={igKey}>
        <span
          style={{ textTransform: 'capitalize' }}>
          {igKey}
        </span>: {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <div className={styles.OrderSummary}>
      <h3>Your Order</h3>
      <div>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
      </div>
      <div>
        <p><strong>Total Price: {props.price.toFixed(2)}$</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
      </div>
    </div>
  );
}


export default orderSummary;