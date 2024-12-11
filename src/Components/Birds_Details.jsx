import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Birds_Details() {
  const { id } = useParams(); 
  const [photo, setPhoto] = useState({});
 


  useEffect(() => {
    const url = `https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20`; 
    
    axios
      .get(url)
      .then((response) => {
     
        const selectedPhoto = response.data.photos.find(photo => photo.id === parseInt(id));
       
        if (selectedPhoto) {
          setPhoto(selectedPhoto);
        } else {
          console.log("Photo not found");
          setPhoto(null);
        }

       
      })
   
  }, [id]); 



  if (!photo) {
    return <h1>Photo not found</h1>;
  }

  return (
    <div>
      <h1>{photo.title}</h1>
      <img src={photo.url} alt={photo.title} style={{ width: '400px' }} />
      <p>{photo.description}</p>
    </div>
  );
}

export default Birds_Details;
