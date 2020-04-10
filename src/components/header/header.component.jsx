import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils'
// Allows us to modify our component to give it access to redux
import { connect } from 'react-redux';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
    </div>
  </div>
)

/*
Takes state as a param, which accesses the root reducer. The root reducer will send this to
the user reducer. The user reducer will access state.user.currrentUser and use that as the
value which is set to the key of currentUser. That current user will be passed as a prop
to the header component
*/

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

// Connect is a HOF in which the component we want to give access to Redux to as the second func param
export default connect(mapStateToProps)(Header);