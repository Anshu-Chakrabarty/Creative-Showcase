import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MasonryGrid from '../components/MasonryGrid';

const UserProfile = () => {
  const { username } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${username}`);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div>
      <h1 style={{textAlign: 'center', marginTop: '40px'}}>{username}'s Collection</h1>
      <MasonryGrid posts={posts} />
    </div>
  );
};

export default UserProfile;