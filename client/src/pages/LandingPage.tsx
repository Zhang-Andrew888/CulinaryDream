import React from "react";
import "../styles/LandingPage.css";
import placeHolderImage from "../assets/cat_smiling.jpg";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Content */}
      <Header />
      <main className="flex flex-1 px-8 py-45 mx-auto">
        <div className="flex-col gap-12 max-w-4xl w-full items-center">
          <h1 className="text-8xl font-bold text-gray-900 leading-tight">
            Save your favorite recipes from anywhere
          </h1>
          <p className="mt-6 text-4xl">
            Keep recipes from your favorite content creator, online chef,
            cookbook, or yourself, and store it all in one website. Be able to
            take notes and improve recipes. Get started with Cuilinary Dream.
          </p>
          <div className="mt-8 flex gap-7 flex-wrap justify-center text-4xl">
            <Link
              to="/browse"
              className="px-15 py-12 bg-green-200 text-white rounded-lg hover:bg-green-300 transition"
            >
              Continue Without Logging In
            </Link>
            <Link
              to="/"
              className="px-15 py-12 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Sign Up/Login
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <picture className="rounded-xl">
            <img src={placeHolderImage} alt="example picture" />
          </picture>
        </div>
      </main>
    </div>
  );
};
