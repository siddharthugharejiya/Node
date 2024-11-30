import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../App.css"

function Single() {
  const [state, setState] = useState([]);
  const { id } = useParams(); 
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
        console.log(res);
        console.log(res.data);
        setState(res.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <>
       <div>
      <h1>Single page</h1>
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
