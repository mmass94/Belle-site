import Image from "next/image";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImagesList = () => {
  const images = [
    "1.jpg",
    "2.jpg",
    "00003z.jpg",
    "00004z.jpg",
    "00005z.jpg",
    "00006z.jpg",
    "00007z.jpg",
  ];

  return (
    <div className="images-list">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img
            src={`/main_images/${image}`}
            alt={`Image ${index + 1}`}
            width={1000}
            height={500}
            className="image"
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesList;
