import React from 'react';
import {
  CheckoutPageContainer,
  CheckoutPageHeader,
  HeaderBlock,
  TotalContainer,
  TestWarningContainer,
  StripeCheckoutButtonContainer
} from './checkout.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CheckoutPage = ({cartItems, total}) => (
  <CheckoutPageContainer>
    <CheckoutPageHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutPageHeader>
    {
      cartItems.map(cartItem => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
      ))
    }
    <TotalContainer>
      <span>TOTAL: ${total}</span>
    </TotalContainer>
    <TestWarningContainer>
      *Please use the following test credit card for payment*
      <br />
      4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
    </TestWarningContainer>
    <StripeCheckoutButtonContainer price={total} />
  </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);