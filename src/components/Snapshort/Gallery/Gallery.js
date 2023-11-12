import React, { useState, useEffect } from "react";
import PhotoGallery from "./PhotoGallery";

const Gallery = (props) => {
  const [flickrData, setFlickrData] = useState(null);
  const apiKey = "e08c4d9eddaccd2d6ea4b7b7e279ddbb"; // Replace with your actual API key
  const query = props.search;

  useEffect(() => {
    // Fetch data from Flickr API
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
        );
        const data = await response.json();
        setFlickrData(data);
        // console.log(data.photos.photo)
      } catch (error) {
        console.error("Error fetching data from Flickr API", error);
      }
    };

    fetchData();
  }, [apiKey, query]);

  return (
   
<div>
<div
  style={{
    fontFamily: '"Josefin Sans", Helvetica, Arial, sans-serif',
    fontSize: '32px',
    fontWeight: "bolder",
    lineHeight: 'normal',
    color: 'rgb(63, 72, 80)',
    textTransform: "capitalize",
    margin: "50px 0"
  }}
>
  {query} imges
</div>

  
  {flickrData  && <PhotoGallery flickrData={flickrData}  /> }
</div>
      );
};

export default Gallery;
