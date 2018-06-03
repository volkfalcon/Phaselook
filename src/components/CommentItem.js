import React, { Component } from 'react';

class CommentItem extends Component {
    deleteComment(id) {
        this.props.deleteComment(id);
    }
    render() {
        return (
            <div className="alert alert-dismissible alert-success">
                {this.props.comment.name}<button type="button" className="close" data-dismiss="alert" onClick={this.deleteComment.bind(this, this.props.key)}>&times;</button>
            </div>
            
        );
    }
}

export default CommentItem;
