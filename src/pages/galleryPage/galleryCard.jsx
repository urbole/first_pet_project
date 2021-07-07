import React from 'react';

const GalleryCards = ({ gallery }) => {

  return (
    <div className="wrapper__gallery">
      {
        gallery.map((item, index) =>
          <div className="gallery__card" key={index}>
            <img src={item.image}
              alt={item.image.slice(item.image.lastIndexOf('/') + 1, item.image.lastIndexOf('-'))}
            />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            <a href={item.link}>Link</a>
          </div>
        )
      }
    </div>
  )
}

export default GalleryCards;