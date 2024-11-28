import React, { useState } from 'react';
import '../App.css'; 
import { useNavigate } from 'react-router-dom';
function Add() {
    const token = localStorage.getItem('authToken');
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        description: '',
    });
const nav = useNavigate()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const { title, image, description } = formData;
        if (!title || !image || !description) {
            setError('All fields are required');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:9595/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    title,
                    image,
                    description,
                    userId: localStorage.getItem('userId'),
                }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Blog added successfully');
                nav("/blog")
                setFormData({ title: '', image: '', description: '' });
            } else {
                setError(data.msg || 'Failed to add blog');
            }
        } catch (err) {
            setError('An error occurred while adding the blog');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="add-container">
            <h1 className="add-header">Add Blog</h1>
            <form onSubmit={handleSubmit} className="add-form">
                <div className="form-group">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image" className="form-label">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="form-textarea"
                        required
                    ></textarea>
                </div>
                {error && <div className="form-error">{error}</div>}
                <button
                    type="submit"
                    className={`form-button ${loading ? 'disabled' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Adding...' : 'Add Blog'}
                </button>
            </form>
        </div>
    );
}

export default Add;
