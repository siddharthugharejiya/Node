import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Own() {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const data = localStorage.getItem("UserId");
  console.log(data);
  
  const token = localStorage.getItem("authToken");
console.log(token);

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
        .then(res => {
          console.log(res);
          setState(res);
        })
        .catch(err => {
          
          setError(err.message);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      setError("No UserId or token found in localStorage");
    }
  }, [data, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleClick = (id) => {
    console.log(id)
    const userId = localStorage.getItem("UserId")
    
   
    if (!userId) {
      setError("UserId not found");
      return;
    }
  
    fetch(`http://localhost:9595/own/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }), 
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
      .catch(err => {
        setError(err.message);
      });
  };
  
  
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
              <button onClick={()=>handleClick(blog.id)}>delete</button>
            </div>
          ))}
          <h1 style={{textAlign:"center"}}>

          <Link to="/add">ADD BLogs</Link>
          </h1>
        </div>
      ) : (
        <div>No blogs found for this user.</div>
      )}
    </div>
  );
}

export default Own;
