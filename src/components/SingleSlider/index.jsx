import React from "react";

const SingleSlider = ({ carObj }) => {
  const [activeImg, setActivrImg] = React.useState(0);

  return (
    <div className="car-page__imgs">
      <div className="car-page__big-image">
        <img src={carObj.imgs[activeImg]} alt="car" />
      </div>
      <div className="car-page__sm-image">
        {carObj.imgs.map((src, index) => (
          <img
            onClick={() => {
              setActivrImg(index);
            }}
            key={index}
            src={src}
            alt="car"
          />
        ))}
      </div>
    </div>
  );
};
export default SingleSlider;
