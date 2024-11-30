import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Single() {
  const [state, setState] = useState([]); // Correct capitalization
  const { id } = useParams(); // Destructure 'id' from useParams
  const token = localStorage.getItem('Token')
  useEffect(() => {
    fetch(`http://localhost:9595/single/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res); // Log the full response
        console.log(res.data); // Log the specific data field
        setState(res.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <>
       <div>
      <h1>OWn Posts</h1>
      {state.map((el) => (
        <div key={el._id}>
          <h1>{el.title}</h1>
          <img src={el.image} alt="img" />
          <p>{el.description}</p>
          <button></button>
        </div>
      ))}
     
    </div>
    </>
  );
}

export default Single;
