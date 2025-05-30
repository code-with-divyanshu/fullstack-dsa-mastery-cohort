import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary py-16 px-6 flex justify-center">
      <div className="max-w-5xl w-full bg-bg-secondary p-10 rounded-xl shadow-lg space-y-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-accent mb-4">About Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Welcome to{" "}
            <span className="font-semibold text-accent">Reicpe Haven</span> — a
            community-driven platform where food lovers and chefs from all
            backgrounds come together to share, learn, and enjoy the magic of
            cooking.
          </p>
        </div>

        {/* Our Mission */}
        <section>
          <h2 className="text-2xl font-semibold text-highlight mb-2">
            Our Mission
          </h2>
          <p className="text-lg">
            At Reicpe Haven, our mission is to make cooking fun, accessible, and
            personalized. We believe that great meals bring people together, and
            we’re here to help you cook with confidence — whether you’re a
            student, a home cook, or a professional chef.
          </p>
        </section>

        {/* What We Offer */}
        <section>
          <h2 className="text-2xl font-semibold text-highlight mb-2">
            What We Offer
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>🌟 A wide range of curated and user-submitted recipes</li>
            <li>🧑‍🍳 Step-by-step instructions and chef credits</li>
            <li>📸 Beautiful visuals and food photography</li>
            <li>📝 Easily update or delete your own recipes</li>
            <li>
              🔍 Category-based filtering (breakfast, lunch, snack, dinner)
            </li>
            <li>🧠 Clean UI for a better browsing and cooking experience</li>
          </ul>
        </section>

        {/* Technology Stack */}
        <section>
          <h2 className="text-2xl font-semibold text-highlight mb-2">
            Technology Stack
          </h2>
          <p className="text-lg mb-2">
            This app is built using modern web technologies:
          </p>
          <ul className="list-disc pl-6 text-lg space-y-1">
            <li>
              ⚛️ <strong>React JS</strong> — for fast and dynamic UI
            </li>
            <li>
              🎨 <strong>Tailwind CSS</strong> — for consistent and elegant
              design
            </li>
            <li>
              🌐 <strong>React Router</strong> — for smooth page navigation
            </li>
            <li>
              💾 <strong>useContext</strong> — for global recipe data management
            </li>
            <li>
              🔔 <strong>React Toastify</strong> — for user notifications
            </li>
          </ul>
        </section>

        {/* Our Story */}
        <section>
          <h2 className="text-2xl font-semibold text-highlight mb-2">
            Our Story
          </h2>
          <p className="text-lg">
            Reicpe Haven started as a small project to organize family recipes
            and quickly evolved into a full-fledged platform. We realized that
            people all over the world are looking for a simple way to discover,
            cook, and share amazing meals.
          </p>
        </section>

        {/* Future Vision */}
        <section>
          <h2 className="text-2xl font-semibold text-highlight mb-2">
            Looking Ahead
          </h2>
          <p className="text-lg">
            We’re continuously working on adding more features like: user
            authentication, likes/comments, saving favorite recipes, and more.
            Our goal is to make Reicpe Haven your go-to app for everything
            cooking.
          </p>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-highlight mb-2">
            Get in Touch
          </h2>
          <p className="text-lg">
            Have questions, ideas, or feedback? We'd love to hear from you!
            <br />
            <span className="text-accent font-medium">Email:</span> hello@Reicpe
            Haven.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
