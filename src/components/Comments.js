import React, { Component } from 'react';
import CommentItem from './CommentItem';

class Comments extends Component {
    deleteComment(id){
        this.props.deleteComment(id);
    }
    render() {
        let commentItems, _commentItems;
        if (this.props.comments) {
            _commentItems = this.props.comments.filter(function(comment){
                return comment.postId === this.props.post.id;
            }.bind(this));
            commentItems = _commentItems.map(comment => {
                return (
                    <CommentItem
                        comment={comment}
                        key={comment.id}
                        deleteComment={this.deleteComment.bind(this)}
                    />
                );
            });
        }
        return (
            <div className="comments mt-3">
                <h5><strong>Comments</strong></h5>
                {commentItems}
            </div>
        );
    }
}

export default Comments;
