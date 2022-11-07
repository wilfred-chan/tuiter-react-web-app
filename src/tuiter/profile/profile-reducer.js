import { createSlice } from "@reduxjs/toolkit";

const profile = {
  name: "Harry Bush",
  handle: "@harrybush",
  profilePicture: "afp.jpg",
  bannerPicture: "rocket.jpg",
  bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
  website: "youtube.com/webdevtv",
  location: "Boston, MA",
  dateOfBirth: "01/30/1990",
  dateJoined: "07/2010",
  followingCount: 340,
  followersCount: 223,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reducers: {
    updateProfile: (state, action) => {
      state.name = action.payload.name;
      state.bio = action.payload.bio;
      state.website = action.payload.website;
      state.location = action.payload.location;
      state.dateOfBirth = action.payload.dateOfBirth;
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
