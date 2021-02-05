import React from 'react';
import { CustomButton } from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import './cart-dropdown.styles.scss';

const cartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton> GO TO CHECK OUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItemsCount(state),
});

export default connect(mapStateToProps)(cartDropdown);
