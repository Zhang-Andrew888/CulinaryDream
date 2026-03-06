import React from "react";
import { Header } from "../components/Header";
import { Categories } from "../constants/constants";
import { Carousel } from "../components/Carousel";

export const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      {Categories.map((category) => (
        <Carousel category={category} />
      ))}
    </div>
  );
};
