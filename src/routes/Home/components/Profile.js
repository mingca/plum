import React from 'react'
import callApi from '../../../middlewares/api'
import '../assets/stylesheet/profile.scss'
import toastr from 'toastr'
import ModalDialog from '../../../../../../components/ModalDialog'
// import avatarPlaceholder from ''

class Profile extends React.Component {
	constructor(props, context){
		super(props, context);
		this.state = {
			email: '',
			password: ''
		}
		this.submit = this.submit.bind(this)
		this.getProfile = this.getProfile.bind(this)
		this.updateProfile = this.updateProfile.bind(this)
	}
	render() {
		return (
			<div>
				<div>
					<img src={'avatarPlaceholder'} alt="Alexey"/>
				</div>
				<div className="">
					<h1> Welcome, Alexey!</h1>
				</div>
				<div className="form-group ">
					<button type="button" className="btn btn-primary btn-lg login-button" onClick={this.updateProfile}>Update</button>
				</div>
			</div>
			<ModalDialog />
		)
	}
	getProfile() {
		let params = {
	      method: 'get',
	      endpoint: 'profile?token=' + this.props.token,
	      data: {},
	      authenticated: true
	    }
		callApi(params)
		.then(response => {
			if (response.data.success) {
				this.props.setProfile(response.data.data)
			}else{
				console.log("GET PROFILE ERROR:", response.data.data.message);
			}
		})
	}
	updateProfile() {
		let params = {
	      method: 'get',
	      endpoint: 'quote?token=' + this.props.token,
	      data: {},
	      authenticated: true
	    }
	    
	    
	    /* Get author */
		callApi(params)
		.then(response => {
			if (response.data.success) {
				this.props.setAuthor(response.data.data)
				Promise.resolve()
			}else{
				console.log("GET AUTHOR ERROR:", response.data.data.message);
				Promise.reject()
			}
		})
		.then(() => {
			/* Get Quote */
			callApi(params)
			.then(response => {
				if (response.data.success) {
					this.props.setQuote(response.data.data)
					Promise.resolve()
				}else{
					console.log("GET QUOTE ERROR:",response.data.data.message);
					Promise.reject()
				}
			})
		})
		.then(() => {
			/* Success */

		})
		.catch(() => {
			/* Failure */
		})
	}
}

Profile.propTypes = {
	setToken: React.PropTypes.func.isRequired,
	token   : React.PropTypes.string.isRequired
}
export default Profile
