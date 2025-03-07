// ContentAPI.js
import React, { Component } from "react";
import axios from "axios";
import { 49216179-c7bcf36ce3a8b7d8768f7f9e0 } from "./secrets.js";
import PostItemAPI from "./PostItemAPI";

class ContentAPI extends Component {
  state = {
    isLoaded: false,
    posts: [],
    savedPosts: [],
    searchTerm: "",
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&per_page=100`
      );
      const fetchedPosts = response.data.hits;
      this.setState({
        isLoaded: true,
        posts: fetchedPosts,
        savedPosts: fetchedPosts,
      });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  handleChange = (event) => {
    const name = event.target.value.toLowerCase();
    this.setState({ searchTerm: name });
    this.setState({
      posts: this.state.savedPosts.filter((post) =>
        post.user.toLowerCase().includes(name)
      ),
    });
  };

  render() {
    const { isLoaded, posts, searchTerm } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <input
          type="text"
          placeholder="Search by user"
          value={searchTerm}
          onChange={this.handleChange}
        />
        <div className="content">
          {posts.map((post) => (
            <PostItemAPI key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default ContentAPI;
