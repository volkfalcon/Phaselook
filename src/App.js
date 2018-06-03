import React, { Component } from 'react';
import Users from './components/Users';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      users: [],
      posts: [],
      comments: [],
      albums: [],
      photos: [],
      error: ""
    }
  }

  getUsers = async () => {
    const api_call = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await api_call.json();
    if (data) {
      this.setState({
        users: data,
        error: ""
      });
    } else {
      this.setState({
        users: [],
        error: "There is no user data."
      });
    }
  }

  getComments = async () => {
    const api_call = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    const data = await api_call.json();
    if (data) {
      this.setState({
        comments: data,
        error: ""
      });
    } else {
      this.setState({
        comments: [],
        error: "There is no comment"
      });
    }
    /*$.ajax({
      url: 'https://jsonplaceholder.typicode.com/comments',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({comments:data}, function(){
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });*/
  }

  getPosts = async () => {
    const api_call = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await api_call.json();
    if (data) {
      this.setState({
        posts: data,
        error: ""
      });
    } else {
      this.setState({
        posts: [],
        error: "There is no post"
      });
    }
  }

  getAlbums = async () => {
    const api_call = await fetch(`https://jsonplaceholder.typicode.com/albums`);
    const data = await api_call.json();
    if (data) {
      this.setState({
        albums: data,
        error: ""
      });
    } else {
      this.setState({
        albums: [],
        error: "There is no album"
      });
    }
  }

  getPhotos = async () => {
    const api_call = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const data = await api_call.json();
    if (data) {
      this.setState({
        photos: data,
        error: ""
      });
    } else {
      this.setState({
        photos: [],
        error: "There is no post"
      });
    }
  }

  componentWillMount(){
    this.getUsers();
    this.getPosts();
    this.getComments();
    this.getAlbums();
    this.getPhotos();
  }

  handleAddComment(comment){
    //console.log(post);
    let comments = this.state.comments;
    comments.push(comment);
    this.setState({comments});
  }

  handleDeleteComment(id){
    let comments = this.state.comments;
    let index = comments.findIndex(x => x.id === id);
    comments.splice(index, 1);
    this.setState({comments});
  }

  handleAddPost(post){
    //console.log(post);
    let posts = this.state.posts;
    posts.push(post);
    this.setState({posts});
  }

  handleDeletePost(id){
    let posts = this.state.posts;
    let index = posts.findIndex(x => x.id === id);
    posts.splice(index, 1);
    this.setState({posts});
  }

  render() {
    return (
      <div className="App">
        <h1><strong>Phaselook Users</strong></h1>
        <Users
        users={this.state.users}
        posts={this.state.posts}
        comments={this.state.comments}
        albums={this.state.albums}
        photos={this.state.photos}
        addPost={this.handleAddPost.bind(this)}
        deletePost={this.handleDeletePost.bind(this)}
        addComment={this.handleAddComment.bind(this)}
        deleteComment={this.handleDeleteComment.bind(this)}
        />
      </div>
    );
  }
}

export default App;
