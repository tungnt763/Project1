import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
        }

    }

    async componentDidMount() {
        let response = await getAllUsers('ALL');
        if (response && !response.errCode) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    /** Life cycle
     * Run component:
     * 1. Run construct -> init state
     * 2. Did mount (set state) -> goi API lay gtri vao va set state cho component  
     * 3. Render -> render state
     */



    render() {
        console.log('check render ', this.state);
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container">
                <div className="title text-center">
                    Manage users with eric
                </div>
                <div className="user-table mt-3 mx-1">
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {/* like for loop */}
                        { arrUsers && arrUsers.map((item, index) => {
                            console.log('eric check map ', item, index)
                            return (
                                <tr>
                                    <td>{item.email}</td>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                                        <button className="btn-delete"><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                            
                        }
                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
