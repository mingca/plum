import React from 'react'
import callApi from '../../../middlewares/api'
import '../assets/stylesheet/signin.scss'
import toastr from 'toastr'

class Signin extends React.Component {
	constructor(props, context){
		super(props, context);
		this.state = {
			email: '',
			password: ''
		}
		this.submit = this.submit.bind(this)
		this.redirect = this.redirect.bind(this)
	}
	render() {
		return (
			<div>

				<div className="form-group">
					<label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
					<div className="cols-sm-10">
						<div className="input-group">
							<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
							<input type="text" className="form-control" name="email" id="email"  placeholder="Enter your Email" ref={c => this.state.email = c}/>
						</div>
					</div>
					<label className="comment">We'll never share your email with anyone else.</label>

				</div>
				<div className="form-group">
					<label htmlFor="password" className="cols-sm-2 control-label">Password</label>
					<div className="cols-sm-10">
						<div className="input-group">
							<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
							<input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password" ref={c => this.state.password = c}/>
						</div>
					</div>
				</div>
				<div className="form-group ">
					<button type="button" className="btn btn-primary btn-lg login-button" onClick={this.submit}>Submit</button>
				</div>
			</div>
		)
	}
	submit() {
		let params = {
	      method: 'post',
	      endpoint: 'login',
	      data: {email: this.state.email.value, password: this.state.password.value},
	      authenticated: false
	    }
		callApi(params)
		.then(response => {
			if (response.data.success) {
				this.props.setToken(response.data.data.token)
				this.redirect()
				console.log("Success to login")
			}else{
				console.log(response.data.data.message);
			}
		})
	}
	redirect() {
		toastr.success('Login Success.')
    	this.context.router.push('/profile')
	}
}

Signin.propTypes = {
	setToken: React.PropTypes.func.isRequired
}
Signin.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Signin
