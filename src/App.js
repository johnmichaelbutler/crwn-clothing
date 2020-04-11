import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth , createUserProfileDocument } from './firebase/firebase.utils';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';




class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    // Destruc the setCurrentUser object
    const {setCurrentUser} = this.props;
    // Allows us to add a user from firebase DB to our state
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // If our user is logged in
      if (userAuth) {
        // create a user profile that returns a userREf
        const userRef = await createUserProfileDocument(userAuth);
        // This is a listener that will listen to any changes to our data but will also return the first state of that data
        userRef.onSnapshot(snapShot=> {
          // Use data to set state using snapShot.id for the id and snapShot.data() to access email, username etc...
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
            }
          );
        });
        // If user logged out, it will reset state to null
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            } />
        </Switch>
      </div>
    );

  }
}

/*
Function that gets dispatch as a param. It will return an object where the prop name
is whatever we want to prop in that dispatches the action e are trying to pass, which is
currentUser.

Dispatch is a way for redux to know that whatever the object that is being passed
is an action object that will be passed to every reducer
*/

// Instead of passing in state, we are destructuring the user object, which still gives us state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
