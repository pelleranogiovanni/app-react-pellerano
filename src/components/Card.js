import * as React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg my-6 w-64 p-8 rounded-lg flex items-center inline-block">
        <div className="text-left">
            <h3 className="text-2xl font-semibold pb-1">{title}</h3>
            <img className="rounded-md w-full h-32" src={image} alt={title} />
            <p className="pt-3">{description}</p>
        </div>
    </div>
  );
};

export default Card;