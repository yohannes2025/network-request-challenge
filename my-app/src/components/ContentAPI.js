import React, { Component } from "react";
import axios from "axios";
import PostItemAPI from "./PostItemAPI";
import { API_KEY } from "./secrets";

class ContentAPI extends Component {
  state = {
    isLoaded: false,
    posts: [],
    savedPosts: [],
  };

  componentDidMount() {
    this.fetchImages();
  }

  async fetchImages() {
    try {
      const response = await axios.get(
        `https://api.example.com/posts?key=${API_KEY}&limit=100`
      );
      const fetchedPosts = response.data.hits; // Adjust the path based on your API structure
      this.setState({
        isLoaded: true,
        posts: fetchedPosts,
        savedPosts: fetchedPosts,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  handleChange = (event) => {
    const name = event.target.value.toLowerCase();
    const filteredPosts = this.state.savedPosts.filter(
      (post) => post.user.toLowerCase().includes(name) // Assuming `user` is the field we're filtering on
    );
    this.setState({ posts: filteredPosts });
  };

  render() {
    const { isLoaded, posts } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <div>
          {posts.map((post) => (
            <PostItemAPI key={post.id} post={post} /> // Use the appropriate property
          ))}
        </div>
      </div>
    );
  }
}

export default ContentAPI;
