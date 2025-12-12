import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const WhoWeAre = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profiles = [
    {
      name: "Trevor Febias",
      image: "https://ca.slack-edge.com/T0101L740P4-U0490LUH4CA-b96a3bcb4510-512",
      bio: "Web developer passionate about React and Tailwind CSS.",
      location: "Nairobi, Kenya 🇰🇪",
      website: "https://github.com/febiasm",
      email: "https://gmail.com",
      twitter: "https://twitter.com",
      description: `I specialize in developing Full-stack web applications
      that leverage cutting-edge technologies and frameworks
      to deliver an exceptional user experience...`,
    },
  ];

  return (
    <div className="relative">
      <NavBar />
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-xl transition"
            onClick={() => setSelectedProfile(profile)}
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <p className="text-gray-600 mt-2">Full-stack Developer</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setSelectedProfile(null)}
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <img
                src={selectedProfile.image}
                alt={selectedProfile.name}
                className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold">{selectedProfile.name}</h2>
                <p className="text-gray-600 mt-2">{selectedProfile.bio}</p>
                <p className="mt-2 font-semibold">Location: {selectedProfile.location}</p>
                <p className="mt-1">
                  Website:{" "}
                  <a
                    href={selectedProfile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {selectedProfile.website}
                  </a>
                </p>
                <p className="mt-1">
                  Email:{" "}
                  <a
                    href={selectedProfile.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {selectedProfile.email}
                  </a>
                </p>
                <p className="mt-1">
                  Twitter:{" "}
                  <a
                    href={selectedProfile.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {selectedProfile.twitter}
                  </a>
                </p>
                <p className="mt-4">{selectedProfile.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center mb-8">
        <Link to="/HomePage">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WhoWeAre;
