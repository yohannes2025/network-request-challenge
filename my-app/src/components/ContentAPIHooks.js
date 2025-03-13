// ContentAPIHooks.js

import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import SearchBar from "./SearchBar";
import axios from "axios";

const ContentAPIHooks = () => {
  // Replace the constructor and states with useState hooks
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

  // Replace the componentDidMount function with useEffect
  useEffect(() => {
    fetchImages();
  }, []);

  // Recreate the fetchImages function as an arrow function
  const fetchImages = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const fetchedPosts = await response.json();

      // Replace setState with hooks
      setIsLoaded(true);
      setPosts(fetchedPosts);
      setSavedPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // Create the handleChange function as an arrow function
  const handleChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm)
    );
    setPosts(filteredPosts);
  };

  // Remove references to 'this' and 'this.state'
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SearchBar handleChange={handleChange} />
      <Gallery posts={posts} />
    </div>
  );
};

export default ContentAPIHooks;
