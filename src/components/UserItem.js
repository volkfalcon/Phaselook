import React, { Component } from 'react';
import AddPost from './AddPost';
import Posts from './Posts';
import Albums from './Albums';

class UserItem extends Component {
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
        return (
            <div className="col-lg-12" id="accordion">
                <div className="user card border-primary mb-3">
                    <div className="card-header">
                        <a data-toggle="collapse" href={"#collapse" + this.props.user.id} role="button" aria-expanded="false" aria-controls={"collapse" + this.props.user.id} data-parent="#accordion">
                            <h4>{this.props.user.name}</h4>
                        </a>
                    </div>
                    <div className="collapse" id={"collapse" + this.props.user.id}>
                        <div className="card-body">
                            <AddPost
                                user={this.props.user}
                                addPost={this.addPost.bind(this)}
                            />
                            <Posts
                                user={this.props.user}
                                posts={this.props.posts}
                                comments={this.props.comments}
                                deletePost={this.deletePost.bind(this)}
                                addComment={this.addComment.bind(this)}
                                deleteComment={this.deleteComment.bind(this)}
                            />
                            <Albums
                                user={this.props.user}
                                albums={this.props.albums}
                                photos={this.props.photos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserItem;
