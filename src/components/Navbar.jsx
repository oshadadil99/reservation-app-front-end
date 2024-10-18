import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout} = useAuth0();


  return (
    <nav className="p-4 shadow-lg" style={{ backgroundColor: 'gray' }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">MyApp</div>
        <div className="space-x-4">
          <Link
            className="text-white hover:bg-blue-600 px-3 py-2 rounded-md"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-white hover:bg-blue-600 px-3 py-2 rounded-md"
            to="/book"
          >
            Book
          </Link>

          <Link
            className="text-white hover:bg-blue-600 px-3 py-2 rounded-md"
            to="/view"
          >
            Reservations
          </Link>

          {isAuthenticated && (
            <Link
              className="text-white hover:bg-blue-600 px-3 py-2 rounded-md"
              to="/profile"
            >
              Profile
            </Link>
          )}

          <span>
            {!isAuthenticated ? (
              <button
                onClick={() => loginWithRedirect()}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Log In
              </button>
            ) : (
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Log Out
              </button>
            )}
          </span>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
