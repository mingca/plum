import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux'


/*
The app element allows you to specify the portion of your app that should be hidden (via aria-hidden)
to prevent assistive technologies such as screenreaders from reading content outside of the content of
your modal.  It can be specified in the following ways:

* element
Modal.setAppElement(appElement);

* query selector - uses the first element found if you pass in a class.
Modal.setAppElement('#your-app-element');

*/
const appElement = document.getElementById('root');



const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class ModalDialog extends React.Component {
  constructor() {
    super();

    this.state = {
      cancel: false,
      /* set True if first request is finished */
      step1 : false 
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({cancel: true});
  }
  componentWillReceiveProps(nextProps) {
      this.setState({ step1: nextProps.author });
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen && !this.state.cancel}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref="subtitle">Requesting the quote</h2>
          <p>Step1: Requestng author.. {this.state.step1 ? 'Completed' : ''}</p>
          {this.state.step1 ? <p>Step2: Requestng quote.. {  this.props.quote ? 'Completed' : ''}</p> : ''}
          <button className = "btn btn-primary btn-lg" onClick={this.closeModal}>Cancel</button>
          
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  author    : state.profile.author,
  quote     : state.profile.quote,
  modalIsOpen: state.profile.requesting
})

export default connect(mapStateToProps)(ModalDialog)

