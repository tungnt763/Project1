
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }

        this.listentToEmitter();
    }

    listentToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: ''
            })
        })
    } // bus event

    componentDidMount() {
        console.log('mouting modal')
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, id) => {
        // bad code
        /**
         * this.state = {
         * email: '',
         * password: '',
         * firstName: '',
         * lastName: '',
         * address: ''
         * 
         * }
         * this.state.email === this.state['email']
         */
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state // ... la copy
        // }, () => {
        //     console.log('check bad state: ', this.state)
        // })

        // good code
        let copyState = {...this.state};
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });
    }

    checkValidateInput = () => {
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                alert('Missing parameter: ' + arrInput[i]);
                return false;
            }
        }
        return true;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid) {
            // call API create modal
            this.props.createNewUser(this.state);
        }
    }

    render() {
        // console.log('check child props ', this.props);
        // console.log('check child open modal ', this.props.isOpen)
        return (
            <Modal 
                isOpen={this.props.isOpen} 
                toggle={() => {this.toggle()}} 
                className={'modal-user-container'}
                size="lg"
            >
                <ModalHeader toggle={() => {this.toggle()}}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container"> 
                            <label>Email</label>
                            <input 
                            type="text" 
                            onChange={(event) => {this.handleOnChangeInput(event, "email")}}
                            value={this.state.email}
                            />
                        </div>
                        <div className="input-container"> 
                            <label>Password</label>
                            <input 
                            type="password" 
                            onChange={(event) => {this.handleOnChangeInput(event, "password")}}
                            value={this.state.password}
                            />
                        </div>
                        <div className="input-container"> 
                            <label>First name</label>
                            <input 
                            type="text" 
                            onChange={(event) => {this.handleOnChangeInput(event, "firstName")}}
                            value={this.state.firstName}
                            />
                        </div>
                        <div className="input-container"> 
                            <label>Last name</label>
                            <input 
                            type="text" 
                            onChange={(event) => {this.handleOnChangeInput(event, "lastName")}}
                            value={this.state.lastName}
                            />
                        </div>
                        <div className="input-container max-width-input"> 
                            <label>Address</label>
                            <input 
                            type="text" 
                            onChange={(event) => {this.handleOnChangeInput(event, "address")}}
                            value={this.state.address}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button 
                    color="primary" 
                    className="px-3" 
                    onClick={() => {this.handleAddNewUser()}}
                    >
                        Add new
                    </Button>{' '}
                    <Button color="secondary" className="px-3" onClick={() => {this.toggle()}}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);



    