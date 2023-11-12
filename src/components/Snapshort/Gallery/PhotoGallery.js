import React from "react";

const PhotoGallery = ({ flickrData }) => {
//   const { photos } = flickrData;
//   console.log(flickrData.photos.photo);

  return (
    <div>
        {(flickrData.photos.photo.length > 0) ?
       <div style={{ textAlign: "center" }}>
       <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
         {flickrData.photos.photo.map((photo) => (
           <img
             key={photo.id}
             src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
             alt={photo.title}
             style={{ width: "200px", height: "200px", margin: "5px" }}
           />
         ))}
       </div>
     </div>
      :
      <div
        style={{
          fontFamily: '"Josefin Sans", Helvetica, Arial, sans-serif',
          fontSize: "24px",
          fontWeight: "bolder",
          lineHeight: "normal",
          color: "rgb(63, 72, 80)",
          textTransform: "capitalize",
          margin: "50px 0",
        }}
      >
        Not Found!
      </div>
      }
    </div>
  );
};

export default PhotoGallery;
