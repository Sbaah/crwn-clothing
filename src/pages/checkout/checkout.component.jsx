import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.components';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='herder-block'>
        <span> Product</span>
      </div>
      <div className='herder-block'>
        <span> Description</span>
      </div>
      <div className='herder-block'>
        <span>Quantity</span>
      </div>
      <div className='herder-block'>
        <span>Price</span>
      </div>
      <div className='herder-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className='total'>
      <span>TOTAL: $ {total}</span>
    </div>
    <div className='test-warning'>
      {' '}
      Strip test credit card for payment <br />
      4242 4242 4242 4242; exp: -1/22 - CW:123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
