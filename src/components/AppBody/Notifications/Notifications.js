import React, { Component } from 'react';
import './Notifications.css';
import { API } from '../../../axios/AxiosLauncher';
import pp from '../../../assets/images/pp.png';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: null
        }
    }

    fetchAlbums = () => {
        API.get('albums')
            .then(res => {
                this.setState({
                    albums: res.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    getAlbums = () => {
        const albums = this.state.albums;
        return albums.map((album, index) => {
            return (<div className="col-xs-12 album" key={index}>
                <div className="col-sm-3">
                    <img src={pp} alt="image" className="album-image" />
                </div>
                <div className="col-sm-9">
                    <div className="album-line1">
                        <span className="float-left">{album.userId}</span>
                        <span className="float-right">{album.id}</span>
                    </div>
                    <div className="album-line2">
                        {album.title}
                    </div>
                </div>
            </div>)
        })
    }

    componentWillMount() {
        this.fetchAlbums();
    }

    render() {
        const albums = this.state.albums ? this.getAlbums() : '';
        return (
            <div className="app-notifications-container">
                <div className="col-xs-12 section-title">
                    Notifications
                </div>
                {albums}
            </div>
        );
    }
}

export default Notifications;
