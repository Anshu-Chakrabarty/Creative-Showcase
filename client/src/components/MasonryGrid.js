import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const MasonryGrid = ({ posts, onImageClick }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {posts.map((post) => (
        <ArtCard key={post._id} post={post} onImageClick={onImageClick} />
      ))}
    </Masonry>
  );
};

const ArtCard = ({ post, onImageClick }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 50) + 1); 
  const toggleLike = (e) => {
    e.stopPropagation(); 
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <div className="art-card">
      <div className="image-wrapper" onClick={() => onImageClick(post)}>
        <img src={post.image} alt="Art" />
        <div className="overlay-hover">
          <span>🔍 View Full Size</span>
        </div>
      </div>
      
      <div className="art-info">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
           <h4>{post.caption ? post.caption.substring(0, 20) + "..." : "Untitled"}</h4>
           <button 
             className={`like-btn ${liked ? 'is-liked' : ''}`} 
             onClick={toggleLike}
           >
             {liked ? '♥' : '♡'} {likes}
           </button>
        </div>
        <small>By <Link to={`/profile/${post.username}`}>{post.username}</Link></small>
      </div>
    </div>
  );
};

export default MasonryGrid;