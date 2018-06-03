import React, { Component } from 'react';
import uuid from 'uuid';

class AddPost extends Component {
    constructor(){
        super();
        this.state = {
            newPost:{}
        }

    }

    handleSubmit(e){
        if(this.refs.post.value === ''){
            alert('Post is required')   
        } else {
            this.setState({
                newPost: {
                    userId: this.props.user.id,
                    id: uuid.v4(),
                    body: this.refs.post.value
                }
            }, function(){
                this.props.addPost(this.state.newPost);
            });
        }
        e.preventDefault();
    }

    render() {
        return (
            this.props.visibleStatus && 
            <div className="add-post mt-3 row">
                <form className="col-lg-12 form-horizontal my-2 my-lg-0" onSubmit={this.handleSubmit.bind(this)}>
                    <input className="form-control p-3" type="text" ref="post" placeholder="Add new post..." />
                    <input className="btn btn-primary float-right mt-3" type="submit" value="Send" />
                </form>
            </div>
        );
    }
}

export default AddPost;
