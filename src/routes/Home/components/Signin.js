import React from 'react'
import callApi from '../../../middlewares/api'
import '../assets/stylesheet/signin.scss'

class Singin extends React.Component {
	constructor(){
		super();
		this.state = {
			email: '',
			password: ''
		}
	}
	render() {
		return (
			<div>
			  	<div class="form-group">
					<label for="name" class="cols-sm-2 control-label">Your Name</label>
					<div class="cols-sm-10">
						<div class="input-group">
							<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
							<input type="text" class="form-control" name="name" id="name"  placeholder="Enter your Name"/>
						</div>
					</div>
				</div>

				<div class="form-group">
					<label for="email" class="cols-sm-2 control-label">Your Email</label>
					<div class="cols-sm-10">
						<div class="input-group">
							<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
							<input type="text" class="form-control" name="email" id="email"  placeholder="Enter your Email"/>
						</div>
					</div>
				</div>
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

Singin.propTypes = {
  info     	: React.PropTypes.string.isRequired,
  setInfo	: React.PropTypes.func.isRequired,
}


export default Singin
