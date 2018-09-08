import React, { Component } from 'react';
import './LeftPanel.css';
import { API } from '../../../axios/AxiosLauncher';
import pp from '../../../assets/images/pp.png';

class LeftPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null
        }
    }

    fetchPosts = () => {
        API.get('users')
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    getPosts = () => {
        const users = this.state.users;
        return users.map((user, index) => {
            return (<div className="col-xs-12 user" key={index}>
                <div className="col-sm-3">
                    <img src={pp} alt="image" className="user-image" />
                </div>
                <div className="col-sm-9">
                    <div className="user-line1">
                        <span className="float-left">{user.name}</span>
                        <span className="float-right">{`username${user.id}`}</span>
                    </div>
                    <div className="user-line2">
                        {user.email}
                    </div>
                </div>
            </div>)
        })
    }

    componentWillMount() {
        this.fetchPosts();
    }

    render() {
        const users = this.state.users ? this.getPosts() : '';
        return (
            <div className="app-users-container">
                <div className="col-xs-12 left-panel-header">
                    <span className="main-link">Who to follow</span>
                    <span className="links float-right">See All</span>
                    <span className="links float-right">Refresh</span>
                </div>
                {users}
            </div>
        );
    }
}

export default LeftPanel;
