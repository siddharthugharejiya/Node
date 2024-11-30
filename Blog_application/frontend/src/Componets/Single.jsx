import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../App.css";

function Single() {
  const [state, setState] = useState([]);
  const { id } = useParams();
 

  useEffect(() => {
    fetch(`http://localhost:9595/single/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        console.log(res);
        setState(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <>
      <div className="single-page">
        <h1>Single page</h1>
        {
          <div key={state._id} className="single-item">
            <h1 className="item-title">{state.title}</h1>
            <img src={state.image} alt="img" className="item-image" />
            <p className="item-description">{state.description}</p>
            <button className="item-button"></button>
          </div>
        }
      </div>
    </>
  );
}

export default Single;
