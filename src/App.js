import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth , createUserProfileDocument } from './firebase/firebase.utils';

import { Switch, Route } from 'react-router-dom';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // Allows us to add a user from firebase DB to our state
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // If our user is logged in
      if (userAuth) {
        // create a user profile that returns a userREf
        const userRef = await createUserProfileDocument(userAuth);
        // This is a listener that will listen to any changes to our data but will also return the first state of that data
        userRef.onSnapshot(snapShot=> {
          // Use data to set state using snapShot.id for the id and snapShot.data() to access email, username etc...
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
        // If user logged out, it will reset state to null
      } else {
        this.setState({currentUser: userAuth});
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );

  }
}

export default App;
