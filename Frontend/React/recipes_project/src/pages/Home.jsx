import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:px-20 min-h-screen bg-bg-primary text-text-primary p-8 gap-10">
      {/* Left Content */}
      <div className="flex flex-col max-w-xl text-center md:text-left">
        <h1 className="text-5xl text-accent font-extrabold mb-6">
          Learn, Cook, Share, <br /> Cooking Made Easy
        </h1>
        <p className="text-xl mb-8 leading-relaxed">
          Say goodbye to long and frustrating food blogs and recipe videos.
          Access our recipe cards to prepare any dish in minutes.
        </p>
        <button
          onClick={() => navigate("/recipes")}
          className="self-center md:self-start bg-accent hover:bg-highlight text-bg-primary font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md shadow-border-shadow"
        >
          Get Started
        </button>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FeatureCard title="Easy to Follow" icon="📖" />
          <FeatureCard title="Variety of Recipes" icon="🍲" />
          <FeatureCard title="Save Your Favorites" icon="💾" />
          <FeatureCard title="Share with Friends" icon="🤝" />
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0">
        <img
          src="https://cdn.dummyjson.com/recipe-images/19.webp"
          alt="Delicious recipe"
          className="w-64 h-64 md:w-100 md:h-100 rounded-full shadow-2xl shadow-border-shadow object-cover"
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ title, icon }) => (
  <div className="flex items-center gap-4 bg-bg-secondary p-4 rounded-lg shadow-md border border-border-shadow">
    <div className="text-3xl">{icon}</div>
    <h3 className="text-accent font-semibold text-lg">{title}</h3>
  </div>
);

export default Home;
