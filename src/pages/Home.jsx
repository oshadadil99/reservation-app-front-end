import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div style={{ 
      backgroundImage: "url('https://wallpapercave.com/wp/wp10534165.jpg')",
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '100vh' 
    }} >
      <Navbar />      
      <div className="text-6xl font-bold grid justify-center align-middle h-[100%]">
      <div className="p-12 rounded-full border-8 border-green-500 mt-60">
          <h1 className="text-blue-300">
            Welcome to Vehicle Reservation App
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
