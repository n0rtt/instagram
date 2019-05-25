import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src="https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg"/>
                <Post alt="nature" src="https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg"/>
            </div>
        );
    }
}