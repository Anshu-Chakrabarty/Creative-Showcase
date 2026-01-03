import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MasonryGrid from '../components/MasonryGrid';

import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image 3.jpg';
import img4 from '../assets/image4.jpg';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null); 

  const showcaseData = [
    { _id: 'static-1', image: img1, caption: "Serenity in nature.", username: "Showcase" },
    { _id: 'static-2', image: img2, caption: "Abstract chaos.", username: "Art_Daily" },
    { _id: 'static-3', image: img3, caption: "Traditional heritage.", username: "Gallery" },
    { _id: 'static-4', image: img4, caption: "Oil texture study.", username: "Masterpiece" }
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');
        setPosts([...showcaseData, ...res.data]);
      } catch (err) {
        console.log("Error fetching posts, showing static only");
        setPosts(showcaseData);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="home-container">
      <h2 style={{ textAlign: 'center', paddingTop: '40px', position: 'relative', zIndex: 1 }}>
        Discover Art
      </h2>
      
      {}
      <MasonryGrid posts={posts} onImageClick={setSelectedImg} />

      {}
      {selectedImg && (
        <div className="modal-backdrop" onClick={() => setSelectedImg(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImg(null)}>×</button>
            <img src={selectedImg.image} alt="Full Size" />
            <div className="modal-caption">
              <h3>{selectedImg.caption}</h3>
              <p>By {selectedImg.username}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;