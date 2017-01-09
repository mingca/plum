import React from 'react'
import { IndexLink, Link } from 'react-router'
// import './Header.scss'

export const Header = (props) => (
  <div>
    <IndexLink to='/' className='btn btn-default' style={{visibility:0}}>
      About us
    </IndexLink>
    { !props.authenticated ?
    <Link to='/signin' className='btn btn-default'>
      Sign in
    </Link>
    :
    null
    }
    { 
    <Link to='/profile' className='btn btn-default'>
      Profile
    </Link>
    }
    {
    <Link to='/signout' className='btn btn-default'>
      Sign out
    </Link>
    }
  </div>
)

export default Header
