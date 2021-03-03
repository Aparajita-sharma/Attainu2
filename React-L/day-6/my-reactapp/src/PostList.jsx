import React, { component } from 'react';

class PostList extends component {
  async componentDidMount() {
    const postId = this.props.match.params.postId;
    const response = await fetch(
      `https://corsanywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts/$ {postID}`
    );
    const posts = await response.json();
    this.satstate({ post });

  }
  render() {
    const {title, body } = this.state.post;
    return this.state.post === null ?(
      <h1>Loading ...</h1>
    ) : (
      <div>
      <h2> Title: {title}</h2>
      <h2> Body : {body} </h2>
      </div>
    )
  }
}

export default PostList;