import React, { Component } from 'react';
import './AppHeader.css';
import pp from '../../assets/images/pp.png';
import { baseURL } from '../../axios/AxiosLauncher';
import axios from 'axios';
import NavBar from './NavBar/NavBar';

const getComments = axios.get(baseURL + 'comments');
const getPhotos = axios.get(baseURL + 'photos');
const getAlbumss = axios.get(baseURL + 'albums');

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateSet: false,
            comments: null,
            photos: null,
            albums: null
        }
    }

    componentWillMount() {
        axios.all([getComments, getPhotos, getAlbumss])
            .then((response) => {
                let res = {
                    comments: response[0].data,
                    photos: response[1].data,
                    albums: response[2].data,
                    stateSet: true
                }
                this.setState({ ...res });
            })
    }

    render() {

        let totalComments = 0, totalPhotos = 0, totalAlbums = 0;
        if (this.state.stateSet) {
            totalComments = this.state.comments.length;
            totalPhotos = this.state.photos.length;
            totalAlbums = this.state.albums.length;
        }
        return (
            <div className="app-header-container">
                <header>
                    <div className="navbar">
                        <a href="javascript:void(0);"><i className="fa fa-fw fa-bars"></i> </a>
                        <a href="javascript:void(0);"><i className="fa fa-fw fa-ellipsis-v"></i> </a>
                        <a href="javascript:void(0);"><i className="fa fa-fw fa-envelope"></i> </a>
                        <a href="javascript:void(0);"><i className="fa fa-fw fa-search"></i> </a>
                    </div>
                    <div className="photo row">
                        <div className="col-xs-2">
                            <img src={pp} className="profile-pic" alt="profile_pic" />
                        </div>
                        <div className='col-xs-10'>
                            <div>
                                <h4 className="handle">
                                    @vishal_rvg
                            </h4>
                                <h3 className="name">
                                    Vishal Gulati
                            </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row bottom-row">
                        <div className="col-sm-4">
                            <div className="counts-block">
                                <span>Tweets</span>
                                <span>{totalComments}</span>
                            </div>
                            <div className="counts-block">
                                <span>Following</span>
                                <span>{totalPhotos}</span>
                            </div>
                            <div className="counts-block">
                                <span>Followers</span>
                                <span>{totalAlbums}</span>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <NavBar />
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default AppHeader;
