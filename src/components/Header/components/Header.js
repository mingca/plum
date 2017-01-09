import React from 'react'
import { IndexLink, Link,Anchor } from 'react-router'
// import './Header.scss'

export class Header extends React.Component {
  constructor(){
    super()
    this.signout = this.signout.bind(this)
  }
  signout(){
    this.props.logout()
    this.context.router.push('/')
  }
  render() {
    return (
      <div>
              <IndexLink to='/' className='btn btn-default' style={{visibility:0}}>
                About us
              </IndexLink>
        { !this.props.authenticated ?
              <Link to='/signin' className='btn btn-default'>
                Sign in
              </Link>
        :
        null
        }
        { this.props.authenticated ?
              <Link to='/profile' className='btn btn-default'>
                Profile
              </Link>
        :
        null
        }
        { this.props.authenticated ?
      
              <div onClick={this.signout} className='btn btn-default'>
                Sign out
              </div>
        :
        null
        }
      </div>
    )
  }
}
Header.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default Header
