import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-bg-secondary text-text-primary py-10 px-6 mt-10 border-t border-border-shadow">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl  font-bold text-accent mb-3">About Reicpe</h3>
          <p className="text-lg  leading-relaxed">
            Reicper is your go-to hub for discovering, sharing, and cooking
            delicious recipes across categories — whether you're a beginner or a
            pro chef.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl  font-bold text-accent mb-3">Quick Links</h3>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/" className="hover:text-accent">
                Home
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="hover:text-accent">
                All Recipes
              </Link>
            </li>
            <li>
              <Link to="/create-recipes" className="hover:text-accent">
                Create Recipe
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl  font-bold text-accent mb-3">Contact</h3>
          <ul className="text-lg  space-y-2">
            <li>Email: hello@Reicpe.com</li>
            <li>Phone: +91 98********</li>
            <li>Location: Dehradun, Uttarakhand, India</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-lg  mt-10 border-t border-border-shadow pt-6">
        &copy; {new Date().getFullYear()} Reicpe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
