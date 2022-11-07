import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateProfile } from "./profile-reducer";

const EditProfileComponent = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [mm, dd, yyyy] = profile.dateOfBirth.split("/");
  const [birthday, setBirthday] = useState(`${yyyy}-${mm}-${dd}`);

  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [location, setLocation] = useState(profile.location);
  const [website, setWebsite] = useState(profile.website);

  const onSaveButtonClick = () => {
    const [yyyy, mm, dd] = birthday.split("-");
    const dateOfBirth = `${mm}/${dd}/${yyyy}`;
    dispatch(
      updateProfile({
        name,
        bio,
        location,
        website,
        dateOfBirth,
      })
    );
  };

  return (
    <div className=" border pb-3">
      <div className="row py-2">
        <div className="col-2 d-flex justify-content-center align-items-center">
          <Link to="/tuiter/profile">
            <i className="bi bi-x-lg"></i>
          </Link>
        </div>
        <div className="col-10 d-flex justify-content-between align-items-center">
          <div className="fs-5 fw-bold">Edit Profile</div>
          <Link to="/tuiter/profile">
            <button
              type="button"
              className="btn btn-dark rounded-pill mx-2"
              onClick={onSaveButtonClick}
            >
              Save
            </button>
          </Link>
        </div>
      </div>
      <div className="position-relative pb-5">
        <img
          className="img-fluid"
          src={`/images/${profile.bannerPicture}`}
          alt="paris banner image"
        ></img>
        <img
          className="mx-3 border border-3 rounded-circle position-absolute bottom-0 start-0"
          width={100}
          src={`/images/avatar/${profile.profilePicture}`}
          alt="user avatar icon"
        ></img>
      </div>
      <div className="mx-3">
        <div className="form-floating my-3">
          <textarea
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></textarea>
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating my-3">
          <textarea
            className="form-control"
            id="bio"
            value={bio}
            onChange={(event) => setBio(event.target.value)}
            style={{ height: "100px" }}
          ></textarea>
          <label htmlFor="bio">Bio</label>
        </div>
        <div className="form-floating my-3">
          <textarea
            className="form-control"
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          ></textarea>
          <label htmlFor="location">Location</label>
        </div>
        <div className="form-floating my-3">
          <textarea
            className="form-control"
            id="website"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          ></textarea>
          <label htmlFor="website">Website</label>
        </div>
        <div className="text-muted">
          <label htmlFor="birthday">Birth date:</label>
        </div>
        <div className="form-control border border-0">
          <input
            type="date"
            id="start"
            value={birthday}
            onChange={(event) => setBirthday(event.target.value)}
            min="1900-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfileComponent;
