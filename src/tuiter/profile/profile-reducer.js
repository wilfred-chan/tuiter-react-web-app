import { createSlice } from "@reduxjs/toolkit";

const profile = {
  firstName: "Harry",
  lastName: "Bush",
  handle: "@harrybush",
  profilePicture: "afp.jpg",
  bannerPicture: "rocket.jpg",
  bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
  website: "youtube.com/webdevtv",
  location: "Boston, MA",
  dateOfBirth: "01/30/1990",
  dateJoined: "July 2010",
  followingCount: 340,
  followersCount: 223,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
});

export default profileSlice.reducer;
