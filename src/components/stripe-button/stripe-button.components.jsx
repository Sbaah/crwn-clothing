import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  //  stripe what the amount of money in cents
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PKEY;

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name=' Crwn Clothing Ltd.'
      billingAddress
      shippingAddress
      //   image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
