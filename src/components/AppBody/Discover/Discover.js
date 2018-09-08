import React, { Component } from 'react';
import './Discover.css';
import { API } from '../../../axios/AxiosLauncher';
import pp from '../../../assets/images/pp.png';

class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null
        }
    }

    fetchPosts = () => {
        API.get('photos')
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    getPosts = () => {
        const posts = this.state.posts;
        return posts.map((post, index) => {
            return (<div className="col-xs-12 post" key={index}>
                <div className="col-sm-3">
                    <img src={pp} alt="image" className="post-image" />
                </div>
                <div className="col-sm-9">
                    <div className="post-line1">
                        <span className="float-left">{post.albumId}</span>
                        <span className="float-right">{post.id}</span>
                    </div>
                    <div className="post-line2">
                        {post.title}
                    </div>
                </div>
            </div>)
        })
    }

    componentWillMount() {
        this.fetchPosts();
    }

    render() {
        const posts = this.state.posts ? this.getPosts() : '';
        return (
            <div className="app-discover-container">
                <div className="col-xs-12 section-title">
                    Discover
                </div>
                {posts}
            </div>
        );
    }
}

export default Discover;
