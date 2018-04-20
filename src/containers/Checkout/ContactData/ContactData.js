import React, { Component } from 'react';

import axios from '../../../axios-orders';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }

  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Ol Besp',
        address: {
          street: 'Teststreet 1',
          zipcode: '41351',
          country: 'Ukraine'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false });
      });
  }

  render () {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your email" />
        <input type="text" name="street" placeholder="Street" />
        <input type="text" name="postal" placeholder="Postal Code" />
        <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.CntactData}>
        <h4>Enter your data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;