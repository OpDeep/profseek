import React, { createContext, useState, useContext } from "react";
import BoyImage from "../assets/boy.png";

const ProfileContext = createContext();

export const useProfiles = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  // Default profiles
  const defaultProfiles = [
    {
      id: 1,
      name: "Sameer",
      description: "QA Tester",
      image: BoyImage,
      email: "sameer@mail.com",
      phone: "1234567890",
      interests: ["selenium", "automation", "testing"],
      address: { lat: 18.5905, lng: 73.7272 },
    },
    {
      id: 2,
      name: "Aditya",
      description: "Lead of GenAI",
      email: "aditya@mail.com",
      phone: "88787878787",
      interests: ["Guitar Playing", "Music", "Singing"],
      image: BoyImage,
      address: { lat: 18.559658, lng: 73.779938 },
    },
    {
      id: 3,
      name: "Ram",
      description: "SDET",
      image: BoyImage,
      email: "ram@mail.com",
      phone: "9898989898",
      interests: ["sports", "cricket", "Ipl"],
      address: { lat: 28.7041, lng: 77.1025 },
    },
    {
      id: 4,
      name: "Chaitanya",
      description: "Data Analyt",
      email: "chaitanya@mail.com",
      phone: "785647845",
      interests: ["soccer", "golf", "music"],
      image: BoyImage,
      address: { lat: 28.7041, lng: 77.1025 },
    },
  ];

  // Initialize state with default profiles
  const [profiles, setProfiles] = useState(defaultProfiles);

  const addProfile = (profile) => {
    setProfiles((prevProfiles) => [
      ...prevProfiles,
      { ...profile, id: Date.now() },
    ]);
  };

  const deleteProfile = (id) => {
    setProfiles((prevProfiles) =>
      prevProfiles.filter((profile) => profile.id !== id)
    );
  };

  return (
    <ProfileContext.Provider value={{ profiles, addProfile, deleteProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
