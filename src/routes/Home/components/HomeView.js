import React from 'react'
import '../assets/stylesheet/home.scss'
import callApi from '../../../middlewares/api'

class HomeView extends React.Component {
	constructor(){
		super();

	}
	render() {
		return (
		  <div>
		    <h4>{this.props.info}</h4>
		  </div>
		)
	}
	componentWillMount() {
		let params = {
	      method: 'get',
	      endpoint: 'info',
	      data: null,
	      authenticated: false
	    }
		callApi(params)
		.then(response => {
			this.props.setInfo(response.data.data.info)
			console.log(response.data.data.info);
		})
		// this.props.fetchInfo()
	}
}

HomeView.propTypes = {
  info     	: React.PropTypes.string.isRequired,
  setInfo	: React.PropTypes.func.isRequired,
}


export default HomeView
