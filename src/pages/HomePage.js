import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import Map from "../components/Map";
import SearchFilter from "../components/SearchFilter";
import { useProfiles } from "../context/ProfileContext";

function HomePage() {
  const { profiles } = useProfiles();
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    setFilteredProfiles(profiles);
  }, [profiles]);

  const handleSearch = (searchTerm) => {
    const filtered = profiles.filter(
      (profile) =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  const handleShowOnMap = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchFilter onSearch={handleSearch} />
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredProfiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onSummary={() => handleShowOnMap(profile)}
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
          <div className="sticky top-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {selectedProfile
                ? `${selectedProfile.name}'s Location`
                : "Select a profile to view location"}
            </h2>
            <div className="h-96 border rounded-lg overflow-hidden">
              <Map selectedProfile={selectedProfile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
