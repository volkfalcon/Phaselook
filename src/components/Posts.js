import React, { Component } from 'react';
import PostItem from './PostItem';

class Posts extends Component {
    deletePost(id){
        this.props.deletePost(id);
    }
    addComment(comment){
        this.props.addComment(comment);
    }
    deleteComment(id){
        this.props.deleteComment(id);
    }
    render() {
        let postItems, _postItems;
        if (this.props.posts) {
            _postItems = this.props.posts.filter(function(post){
                return post.userId === this.props.user.id;
            }.bind(this));
            postItems = _postItems.map(post => {
                //console.log(post);
                return (
                    <PostItem
                        user={this.props.user}
                        key={post.id}
                        post={post}
                        posts={this.props.posts}
                        comments={this.props.comments}
                        deletePost={this.deletePost.bind(this)}
                        addComment={this.addComment.bind(this)}
                        deleteComment={this.deleteComment.bind(this)}
                    />
                );
            });
        }
        return (
            <div className="posts mt-3 text-center" id="accordion-post">
                <a data-toggle="collapse" href={"#collapse-post"+this.props.user.id} role="button" aria-expanded="false" aria-controls={"collapse-post"+this.props.user.id} data-parent="#accordion-post">
                    <h4><strong>Posts</strong></h4>
                </a>
                
                <div className="collapse" id={"collapse-post"+this.props.user.id}>
                    {postItems}
                </div>
            </div>
        );
    }
}

export default Posts;
