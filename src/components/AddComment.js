import React, { Component } from 'react';
import uuid from 'uuid';

class AddComment extends Component {
    constructor(){
        super();
        this.state = {
            newComment:{}
        }

    }

    handleSubmit(e){
        if(this.refs.comment.value === ''){
            alert('Comment is required')   
        } else {
            this.setState({
                newComment: {
                    postId: this.props.post.id,
                    id: uuid.v4(),
                    name: this.refs.comment.value
                }
            }, function(){
                this.props.addComment(this.state.newComment);
            });
        }
        e.preventDefault();
    }

    render() {
        return (
            <div className="add-comment mt-3 form-group">
                <form className="form-horizontal my-2 my-lg-0" onSubmit={this.handleSubmit.bind(this)}>
                    <input className="form-control p-3" type="text" ref="comment" placeholder="Add new comment..." />
                    <input className="btn btn-primary float-right mt-3" type="submit" value="Send" />
                </form>
            </div>
        );
    }
}

export default AddComment;
