import React, { Component } from 'react';
import AddComment from './AddComment';
import Comments from './Comments';

class PostItem extends Component {
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
            this.props.visibleStatus && 
            <div className="jumbotron pt-4 pb-4">
                <blockquote className="blockquote row">
                    <div className="col-lg-12">
                        <p className="mb-0">{this.props.post.body}</p>
                        <footer className="blockquote-footer">
                            {this.props.post.title}
                        </footer>
                        <button type="button" className="btn btn-secondary ml-3 float-right" onClick={this.deletePost.bind(this, this.props.post.id)}>Delete</button>
                        <button type="button" className="btn btn-primary ml-3 float-right">Edit</button>
                    </div>

                    <div className="col-lg-12">
                        <Comments
                            post={this.props.post}
                            comments={this.props.comments}
                            deleteComment={this.deleteComment.bind(this)}
                        />
                        <AddComment
                            post={this.props.post}
                            addComment={this.addComment.bind(this)}
                        />
                    </div>
                </blockquote>
            </div>
        );
    }
}

export default PostItem;
