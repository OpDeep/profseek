import React from "react";
import { Link } from "react-router-dom";

function ProfileCard({ profile, onSummary }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      {/* Profile Image */}
      <img
        src={profile.image}
        alt={profile.name}
        className="w-full h-56 object-cover"
      />

      {/* Profile Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
        <p className="text-gray-600 mt-3 text-sm leading-relaxed line-clamp-3">
          {profile.description}
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={() => onSummary(profile)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition duration-300"
          >
            Show on Map
          </button>
          <Link
            to={`/profile/${profile.id}`}
            className="text-blue-500 font-medium hover:text-blue-600 transition duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
