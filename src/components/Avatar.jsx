import React from "react";

const Avatar = ({ image, isNew }) => {
  return (
    <div>
      <img className="photo" src={image} alt="avatar" />
      {isNew && <span className="new">신입</span>}
    </div>
  );
};

export default Avatar;
