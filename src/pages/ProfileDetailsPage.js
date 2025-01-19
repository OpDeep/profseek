import React from "react";
import { useParams, Link } from "react-router-dom";
import Map from "../components/Map";
import { useProfiles } from "../context/ProfileContext";

function ProfileDetailsPage() {
  const { profiles } = useProfiles();
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-semibold text-gray-700">
          Profile Not Found
        </h1>
        <Link
          to="/"
          className="text-gray-600 hover:text-gray-800 transition duration-300 mt-4 inline-block"
        >
          ← Back to all profiles
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        to="/"
        className="text-gray-600 hover:text-gray-800 transition duration-300 mb-6 inline-block"
      >
        ← Back to all profiles
      </Link>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Details */}
          <div className="md:w-1/2">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-64 object-cover rounded-lg mb-4 shadow-md"
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {profile.name}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              {profile.description}
            </p>
            <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">
                Contact Information
              </h2>
              {profile.email && (
                <p className="mb-2">
                  <span className="font-medium text-gray-800">Email:</span>{" "}
                  {profile.email}
                </p>
              )}
              {profile.phone && (
                <p className="mb-2">
                  <span className="font-medium text-gray-800">Phone:</span>{" "}
                  {profile.phone}
                </p>
              )}
              {profile.address && (
                <p className="mb-2">
                  <span className="font-medium text-gray-800">Address:</span>{" "}
                  {profile.address.lat}, {profile.address.lng}
                </p>
              )}
            </div>
            {profile.interests && profile.interests.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-3">
                  {profile.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Map Section */}
          <div className="md:w-1/2">
            <div className="h-96 md:h-full rounded-lg overflow-hidden border border-gray-300 shadow-md">
              <Map selectedProfile={profile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailsPage;
