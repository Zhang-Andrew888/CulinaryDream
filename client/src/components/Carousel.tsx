import React from "react";
type CarouselProps = {
  category: string;
};

export const Carousel: React.FC<CarouselProps> = ({ category }) => {
  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};
