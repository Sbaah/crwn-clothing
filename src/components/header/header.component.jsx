import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';

// import './header.styles.scss';

// here hold the logging-in and the sign-up and contact links
const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'> SHOP</OptionLink>
        <OptionLink to='/shop'> CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink
            as='div'
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'> SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
// currentUser,
// hidden,
// });

// createStructuredSelector will automatically pass on our top level state
// to the  subsequent selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
