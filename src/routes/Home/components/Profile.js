import React from 'react'
import callApi, {BASE_URL} from '../../../middlewares/api'
import '../assets/stylesheet/profile.scss'
import toastr from 'toastr'
import ModalDialog from '../../../components/ModalDialog'


class Profile extends React.Component {
	constructor(props, context){
		super(props, context);
		this.state = {
			email: '',
			password: ''
		}
		this.getProfile = this.getProfile.bind(this)
		this.updateProfile = this.updateProfile.bind(this)
	}
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
						<img src={`${BASE_URL}${this.props.profile.avatar}`} className="avatar" alt="Alexey"/>
					</div>
					<div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
						<div>
							<h1> Welcome, Alexey!</h1>
						</div>
						<div className="form-group ">
							<button type="button" className="btn btn-primary btn-lg login-button" onClick={this.updateProfile}>Update</button>
						</div>
					</div>
				
					<p>[here is place for concatenated result from long running call]</p>
					<ModalDialog />
				</div>
			</div>
		)
	}
	componentWillMount() {
		this.getProfile()
	}
	getProfile() {
		let params = {
	      method: 'get',
	      endpoint: 'profile?token=' + this.props.token,
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

	    this.props.requestQuote()

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
	setProfile	: React.PropTypes.func.isRequired,
	setAuthor	: React.PropTypes.func.isRequired,
	setQuote	: React.PropTypes.func.isRequired,
	requestQuote: React.PropTypes.func.isRequired,
	token   	: React.PropTypes.string.isRequired
}
export default Profile
