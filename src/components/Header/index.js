import { injectReducer } from '../../store/reducers'

const Header = require('./containers/Header').default
// const reducer = require('./modules/header').default

/*  Add the reducer to the store on key 'counter'  */
// injectReducer(store, { key: 'counter', reducer })

export default Header