import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Own() {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const data = localStorage.getItem("UserId");
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (data && token) {
      fetch(`http://localhost:9595/own`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          if (!res.ok) {
            throw new Error("Failed to fetch data");
          }
          return res.json();
        })
        .then(res => setState(res))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      setError("No UserId or token found in localStorage");
    }
  }, [data, token]);

  const handleDelete = (id) => {
    if (!data) {
      setError("UserId not found");
      return;
    }

    fetch(`http://localhost:9595/own/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: data }),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to delete blog");
        }
        return res.json();
      })
      .then(() => {
        setState(prevState => ({
          ...prevState,
          data: prevState.data.filter(blog => blog.id !== id),
        }));
      })
      .catch(err => setError(err.message));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {state?.data && state.data.length > 0 ? (
        <div>
          <h1>User Blogs</h1>
          {state.data.map((blog, index) => (
            <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              <h3>{blog.title}</h3>
              <img src={blog.image} alt={blog.title} style={{ width: '100px', height: '100px' }} />
              <p>{blog.description}</p>
              <p><strong>Posted by:</strong> {blog.userId?.username}</p>
              <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </div>
          ))}
          <h1 style={{ textAlign: "center" }}>
            <Link to="/add">ADD Blogs</Link>
          </h1>
        </div>
      ) : (
        <div>No blogs found for this user.</div>
      )}
    </div>
  );
}

export default Own;
