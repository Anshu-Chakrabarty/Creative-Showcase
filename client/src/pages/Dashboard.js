import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MasonryGrid from '../components/MasonryGrid';

const Dashboard = ({ user }) => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [myPosts, setMyPosts] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result); 
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      user: user.id,
      image: file,
      caption: caption
    };
    try {
      await axios.post('http://localhost:5000/api/posts', newPost);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchMyPosts = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${user.username}`);
      setMyPosts(res.data);
    };
    fetchMyPosts();
  }, [user.username]);

  return (
    <div>
      <div className="upload-form">
        <h3>Upload New Memory</h3>
        <input type="file" onChange={handleFileChange} />
        <textarea placeholder="Write a caption..." onChange={(e) => setCaption(e.target.value)} />
        <button onClick={handleSubmit}>Upload Art</button>
      </div>
      <h3 style={{marginLeft: '20px'}}>My Gallery</h3>
      <MasonryGrid posts={myPosts} />
    </div>
  );
};

export default Dashboard;