import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Blog() {
  const [state, setState] = useState([]);
  const token = localStorage.getItem("authToken");
//   const UserId = localStorage.getItem("userid");
//   console.log(UserId);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      fetch("http://localhost:9595/blog", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(` this is our user id ${res.userId.userId}`);
          localStorage.setItem("UserId", res.userId.userId);
          setState(res.data);
        })
        .catch((err) => console.error("Error fetching blog posts:", err))
        .finally(() => setLoading(false));
    } else {
      console.log("No token found.");
    }
  }, [token]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const change= (id)=>{
    console.log(id);
    
  }
  return (
    <div className="blog-container">
      <h1 className="blog-title">All Blogs</h1>
      <div className="blog-grid">
        {state.map((el) => (
          <div key={el.id} className="blog-card">
            <img src={el.image} alt={el.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-heading">{el.title}</h2>
              <p className="blog-description">{el.description}</p>
            </div>
            <button onClick={()=>change(el.id)}>Delete</button>
            
          </div>
        ))}
      </div>
      <Link to={`/own`} className="own-link">
        View Your Blogs
      </Link>
    </div>
  );
}

export default Blog;
