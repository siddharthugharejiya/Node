import React, { useEffect, useState } from 'react';

function Blog() {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(true); // State to manage loading
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        fetch("http://localhost:9595/blog")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to fetch blogs");
                }
                return res.json();
                
            })
            .then(res => {
                setState(res.data); // Assuming the response has 'data' property
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Blog Posts</h1>
            {state && state.length > 0 ? (
                state.map((blog, index) => (
                    <div key={index}>
                        <h2>{blog.title}</h2>
                        <img src={blog.image} alt={blog.title} />
                        <p>{blog.description}</p>
                    </div>
                ))
            ) : (
                <p>No blogs available</p>
            )}
        </div>
    );
}

export default Blog;
