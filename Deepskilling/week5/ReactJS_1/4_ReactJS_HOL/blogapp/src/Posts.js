import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidCatch(error, info) {
        // Displaying any error happening in the component as alert messages
        alert("An error occurred in a child component: " + error.toString());
    }

    loadPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data });
            })
            .catch(error => {
                console.error("Error loading posts:", error);
                alert("Error loading posts: " + error.message);
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    render() {
        return (
            <div className="posts-container">
                <h1>Blog Posts</h1>
                <div className="posts-grid">
                    {this.state.posts.map(post => (
                        <Post key={post.id} title={post.title} body={post.body} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Posts;
