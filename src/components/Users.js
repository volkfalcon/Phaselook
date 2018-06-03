import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
    addPost(post) {
        this.props.addPost(post);
    }
    deletePost(id) {
        this.props.deletePost(id);
    }
    addComment(comment) {
        this.props.addComment(comment);
    }
    deleteComment(id) {
        this.props.deleteComment(id);
    }
    render() {
        let userItems;
        if (this.props.users) {
            userItems = this.props.users.map(user => {
                //console.log(user);
                return (
                    <UserItem
                        key={user.id}
                        user={user}
                        posts={this.props.posts}
                        comments={this.props.comments}
                        albums={this.props.albums}
                        photos={this.props.photos}
                        addPost={this.addPost.bind(this)}
                        deletePost={this.deletePost.bind(this)}
                        addComment={this.addComment.bind(this)}
                        deleteComment={this.deleteComment.bind(this)}
                    />
                );
            });
        }
        return (
            <div className="users row">
                {userItems}
            </div>
        );
    }
}

export default Users;
