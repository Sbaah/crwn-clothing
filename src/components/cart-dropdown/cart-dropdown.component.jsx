import React from 'react';
import { CustomButton } from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const cartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-item' />
    <CustomButton> GO TO CHECK OUT</CustomButton>
  </div>
);
export default cartDropdown;
